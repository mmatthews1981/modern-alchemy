//TODO: figure out how to make new clones immediately droppable and mixable
//TODO: fix z-index of last-selected element
//TODO: clear playspace button
//TODO: add recycling bin
//TODO: add cookie to save active element progress automatically
//TODO: add button to clear progress

buildBaseList();

function buildBaseList() {
    $('.base').remove();
    Object.keys(encyclopedia).forEach(function (key) {

        if (encyclopedia[key].active) {
            var newbase = $('<div class="base" data-element="' + key + '"></div>');
            $(newbase).addClass(key);
            $('.index-col').append(newbase);
        }

        var alphabeticallyOrderedDivs = $('.base').sort(function (a, b) {
            return $(a).data("element") > $(b).data('element');
        });
        $(".index-col").html(alphabeticallyOrderedDivs);

    });


    $('.base').draggable({
        containment: ".container",
        scroll: false,
        helper: function (e, ui) {
            var elem = $(this).data('element');
            return $('<div class="thing original ' + elem + ' " data-element="' + elem + '"></div>');
        }
    });

    $(".play-area").droppable({
        drop: function (event, ui) {
            if (ui.helper.hasClass('original')) {
                ui.helper
                    .clone()
                    .draggable({
                        containment: ".container",
                        scroll: false
                    })
                    .droppable(dropObj)
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
                    scroll: false
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
}