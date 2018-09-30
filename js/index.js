//TODO: figure out how to make new clones immediately droppable and mixable
//TODO: add cookie to save active element progress automatically
//TODO: add button to clear progress
//TODO: add scroll-wheel scrolling to element list

buildBaseList();

function buildBaseList() {
    $('.base').remove();
    Object.keys(encyclopedia).forEach(function (key) {

        if (encyclopedia[key].active) {
            var newbase = $('<div class="base" data-element="' + key + '"></div>');
            $(newbase).addClass(key);
            $('.index-col').append(newbase);
        }

        var bases = $('.base');
        bases.sort(function(a,b){
            var an = a.getAttribute('data-element'),
                bn = b.getAttribute('data-element');

            if(an > bn) { return 1; }
            if(an < bn) { return -1; }
            return 0;
        });
        $(".index-col").html(bases)
    });


    $('.base').draggable({
        containment: ".container",
        scroll: false,
        appendTo: '.play-area',
        helper: function (e, ui) {
            var elem = $(this).data('element');
            return $('<div class="thing original" data-element="' + elem + '"></div>')
                .draggable({
                    containment: ".container",
                    scroll: false,
                    start: function(e, ui){
                        $('.thing').css('z-index', 1);
                        $(ui.helper).css('z-index', 2);
                    }
                })
                .droppable(dropObj)
        }
    });

    $(".play-area").droppable({
        drop: function (event, ui) {
            var elem = ui.helper.data('element');
            if (ui.helper.hasClass('original')) {
                ui.helper
                    .clone()
                    .draggable({
                        containment: ".container",
                        scroll: false,
                        start: function(e, ui){
                            $('.thing').css('z-index', 1);
                            $(ui.helper).css('z-index', 2);
                        }
                    })
                    .droppable(dropObj)
                    .addClass(elem)
                    .removeClass('original')
                    .appendTo($(this))
            }
        }
    });

}

var dropObj = {
    accept: '.thing',
    tolerance: "pointer",
    drop: function (droppede, droppedui) {
        var dragged = $(droppedui.draggable);
        var dropped = $(this);
        var element = encyclopedia[dragged.data("element")][dropped.data("element")];

        if (element) {

            $('<div class="thing ' + element + ' " data-element="' + element + '"></div>')
                .draggable({
                    containment: ".container",
                    scroll: false,
                    start: function(e, ui){
                        $('.thing').css('z-index', 1);
                        $(ui.helper).css('z-index', 2);
                    }
                })
                .droppable(dropObj)
                .css({top: droppedui.position.top, left: droppedui.position.left})
                .hide()
                .appendTo('.play-area')
                .fadeIn('slow');

            $(dragged).fadeOut('slow', function () {
                $(this).remove();
            });
            $(dropped).fadeOut('slow', function () {
                $(this).remove();
            });

            encyclopedia[element].active = true;
            buildBaseList();
        }
    }
};

$('.clear-screen').click(function (e) {
    $('.thing').fadeOut('slow', function () {
        $(this).remove();
    });
});

$('.thing').click(function(el){

    $('.thing').css('z-index', 1);
    $(el.target).css('z-index', 2);
});

$('.trash-can').droppable({
    accept: '.thing',
    tolerance: "pointer",
    over: function(event,ui){
        $(this).animate({backgroundColor: 'green'}, 'fast');
    },
    out: function(event,ui){
        $(this).animate({backgroundColor: 'transparent'}, 'fast');
    },
    drop: function(event, ui){
        $(ui.draggable).remove();
        $(this).animate({backgroundColor: 'transparent'}, 'fast');
    }
});