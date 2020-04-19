//Jquery
$(document).ready(function() {

    $(".in-btn").click(function () {

        const theClass = this.className;  // "this" is the element clicked
        const classNames = theClass.split(' ');
        const lastElementNum = classNames.length -1;
        const appendNum = $("." + classNames[lastElementNum]).text().replace(/\s/g, '');
        $("#screen-text").text($("#screen-text").text() + appendNum);

    });

    $(".clear-btn").click(function () {

        $("#screen-text").text(" ");

    })

    $(".back-btn").click(function () {

        $("#screen-text").text($("#screen-text").text().slice(0, -1));

    })

    $(".equals-btn").click(function () {

        $("#screen-text").text(eval($.trim($("#screen-text").text().replace(/\s/g, ''))));

    })

});

