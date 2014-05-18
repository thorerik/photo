/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../angularjs/angular-animate.d.ts" />


window.onload = () => {
    var sidebarcollapsed = false;
    $('#showhide').click(function () {
        if (sidebarcollapsed) {
            $('#sidebar').animate({
                right: "+=320"
            }, 500, function () {
                $('#showhide').html("»");
                sidebarcollapsed = false;
                $('#content').width("100%");
            });
        }
        else {
            $('#sidebar').animate({
                right: "-=320"
            }, 500, function () {
                $('#showhide').html("«");
                sidebarcollapsed = true;
                $('#content').width("75%");
                });
        }
    });
};