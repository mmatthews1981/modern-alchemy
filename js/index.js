//TODO: add cookie to save active element progress automatically
//TODO: add button to clear progress
//TODO: unmixable elements slide off each other
//TODO: slides try to mix with anything it lands on
//TODO: add non-mixing element interactivity, like long drag = time or drag from blank = nothing
//TODO: redo mountains, desert, bacteria icons and make them bigger



buildBaseList();

function buildBaseList() {
    $('.first').remove();

    var totalElements = 0;
    var activeElements = 0;

    Object.keys(encyclopedia).forEach(function (key) {

        totalElements += 1;

        if (encyclopedia[key].active) {

            activeElements += 1;

            var newbase = $('<div class="base first" data-element="' + key + '"></div>');
            $(newbase).addClass(key);
            $('.index-col').append(newbase);
        }

        var bases = $('.first');
        bases.sort(function (a, b) {
            var an = a.getAttribute('data-element'),
                bn = b.getAttribute('data-element');

            if (an > bn) {
                return 1;
            }
            if (an < bn) {
                return -1;
            }
            return 0;
        });
        $(".index-col").html(bases)
    });

    interact('.base').draggable({
        inertia: true,
        restrict: {
            restriction: ".play-area",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        onmove: function (event) {
            var target = event.target;
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.webkitTransform =
                target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);

        },
        onend: function(event) {

        }
    }).on('dragstart', function(event){
        $('.index-col').removeClass('dragscroll');
        dragscroll.reset()
    }).on('dragend', function(event){
        $('.index-col').addClass('dragscroll');
        dragscroll.reset()
    })
        .on('move', function (event) {

        var interaction = event.interaction;
        if (interaction.pointerIsDown && !interaction.interacting() && event.currentTarget.getAttribute('clonable') != 'false') {

            var clone = event.currentTarget.cloneNode(true);
            var x = clone.offsetLeft;
            var y = clone.offsetTop;
            clone.setAttribute('clonable','false');
            clone.style.position = "absolute";
            clone.style.left = (event.clientX - 50)+"px";
            clone.style.top = (event.clientY -50)+"px";
            $(clone).addClass('thing').removeClass('first');
            $('.play-area').append(clone);
            interaction.start({ name: 'drag' },event.interactable,clone);
        }
        $('.thing').css('z-index', 1);
        $(event.currentTarget).css('z-index', 2);
    })  .dropzone({
        ondrop: function (event) {
            //event.target = dropzone
            //event.relatedTarget = dropped element

            var interaction = event.interaction;

            var element = encyclopedia[$(event.relatedTarget).data("element")][$(event.target).data("element")];
            if($(event.target).hasClass('thing') && element){

                element.forEach(function(elem, idx){
                    var clone = event.target.cloneNode(true);
                    clone.setAttribute('clonable','false');
                    clone.style.position = "absolute";

                    var offsetLeft = event.target.offsetLeft + (idx*20);
                    var offsetTop = event.target.offsetTop + (idx*30);
                    clone.style.left = offsetLeft+"px";
                    clone.style.top = offsetTop+"px";
                    $(clone).removeClass($(event.target).data('element'))
                        .addClass(elem)
                        .data('element', elem);

                    $('.play-area').append(clone);
                    interaction.start({ name: 'drag' },event.interactable,clone);
                    $(event.relatedTarget).fadeOut('slow', function () {
                        $(this).remove();
                    });
                    $(event.target).fadeOut('slow', function () {
                        $(this).remove();
                    });

                    encyclopedia[elem].active = true;
                    buildBaseList();
                });

            }
        }
    });

    $('.activeElements').text(activeElements);
    $('.totalElements').text(totalElements);

}

interact('.trash-can').dropzone({
    ondrop: function (event) {

        $(event.relatedTarget).fadeOut('slow', function () {
            $(this).remove();
        });
    }
})

$('.clear-screen').click(function (e) {
    $('.thing').fadeOut('slow', function () {
        $(this).remove();
    });
});

$('.about, .close').on('click', function(){
   $('.modal').toggle();
});

