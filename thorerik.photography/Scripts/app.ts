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
                $('#next').animate({
                    right: "+=320"
                }, 0, function () { });
                
            });
        }
        else {
            $('#sidebar').animate({
                right: "-=320"
            }, 500, function () {
                $('#showhide').html("«");
                sidebarcollapsed = true;
                $('#content').width("75%");
                $('#next').animate({
                    right: "-=320"
                }, 0, function () { });
                });
        }
    });

    $('#next').click(function (e) {
        var href = $('#next a').attr('href');
        window.location.href = href;
        e.preventDefault();
    });

    $('#previous').click(function (e) {
        var href = $('#previous a').attr('href');
        window.location.href = href;
        e.preventDefault();
    });

    $(document).keydown(function (e) {
        switch (e.which) {
        case 37: 
            var href = $('#previous a').attr('href');
            window.location.href = href;
            break;
        case 39:
            var href = $('#next a').attr('href');
            window.location.href = href;
            break;
        default: return;
        }
        e.preventDefault();
    });
};
