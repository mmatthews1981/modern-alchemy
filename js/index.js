buildBaseList();

function buildBaseList() {
    $('.first').remove();
    Object.keys(encyclopedia).forEach(function (key) {

        if (encyclopedia[key].active) {
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
    }).on('move', function (event) {
        var interaction = event.interaction;
        if (interaction.pointerIsDown && !interaction.interacting() && event.currentTarget.getAttribute('clonable') != 'false') {
            var original = event.currentTarget;
            var clone = event.currentTarget.cloneNode(true);
            var x = clone.offsetLeft;
            var y = clone.offsetTop;
            clone.setAttribute('clonable','false');
            clone.style.position = "absolute";
            clone.style.left = original.offsetLeft+"px";
            clone.style.top = original.offsetTop+"px";
            $(clone).addClass('thing').removeClass('first');
            original.parentElement.appendChild(clone);
            interaction.start({ name: 'drag' },event.interactable,clone);
        }
        $('.thing').css('z-index', 1);
        $(event.currentTarget).css('z-index', 2);
    })  .dropzone({
        ondrop: function (event) {
            //event.target = dropzone
            //event.relatedTarget = dropped element
            var interaction = event.interaction;


            console.log(event);
            var element = encyclopedia[$(event.relatedTarget).data("element")][$(event.target).data("element")];
            if($(event.target).hasClass('thing') && element){

                console.log(event)
                var clone = event.target.cloneNode(true);
                clone.setAttribute('clonable','false');
                clone.style.position = "absolute";
                clone.style.left = event.target.offsetLeft+"px";
                clone.style.top = event.target.offsetTop+"px";
                $(clone).removeClass($(event.target).data('element'))
                    .addClass(element)
                    .data('element', element);

                $('.play-area').append(clone);
                interaction.start({ name: 'drag' },event.interactable,clone);
                $(event.relatedTarget).fadeOut('slow', function () {
                    $(this).remove();
                });
                $(event.target).fadeOut('slow', function () {
                    $(this).remove();
                });

                encyclopedia[element].active = true;
                buildBaseList();
            }
        }
    });

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

