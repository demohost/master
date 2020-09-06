$(document).ready(function () {
    
   // Code to redirect on home page
    var menuHome = $('#navbar li a:contains("Home")');
    var headerLogo = $('.navbar-header .navbar-brand');
    var footerLogo = $('.footerlogo-div a');

    menuHome.attr('href', 'javascript:void(0)');
    menuHome.attr('onclick', 'javascript:GoToHomePage()');

    headerLogo.attr('href', 'javascript:void(0)');
    headerLogo.attr('onclick', 'javascript:GoToHomePage()');

    footerLogo.attr('href', 'javascript:void(0)');
    footerLogo.attr('onclick', 'javascript:GoToHomePage()');


    if (isTouch() == true) {
        $('body').addClass('touch-device');

        $(document).on('click touchend', '.touch-device .navbar-nav .dropdown-submenu > a', function () {
            if (!$(this).hasClass('one-click')) {
                $('.touch-device .navbar-nav .dropdown-submenu > a').not(this).removeClass('one-click');
                $(this).addClass('one-click');
                $(this).trigger('mouseover');
                return false;
            }
        });

        $('.navbar-default .navbar-nav > li').click(function () {
            $('.navbar-default .navbar-nav > li').removeClass('active');
            $(this).addClass('active');
        });
    }

    $(".get-in-touch a").click(function () {
        $(".getpopup").addClass('popup-open');
        $(".getoverlay").css({ "right": "0" });
    })
    $(".getpopup a.close-pop").click(function () {
        $(".getpopup").removeClass('popup-open');
        $(".getoverlay").removeAttr('style');
    });
    $(".getoverlay").click(function () {
        $(".getpopup").removeClass('popup-open');
        $(this).removeAttr('style');
    });

    if ($(window).width() < 768) {
        $('.tab-content .tab-heading a').click(function () {
            if ($(this).parent().next('.tab-pane').hasClass('active')) {
                $(this).parent().removeClass('active-tab');
            }
            else {
                $('.tab-content .tab-heading').removeClass('active-tab');
                $(this).parent().addClass('active-tab');
            }
        });

        //Code for menu overlay in mobile view
        //$('.navbar-toggle').click(function () {
        //    $('.navbar-default').toggleClass('active-menu');
        //});
    }

    //Product Page toggle data
    $('.modules-content .list-group .list-group-item').on('click', function () {
        $('.modules-content .list-group .list-group-item').removeClass('active');
        $(this).addClass('active');
    });

    $('#main-wrapper').append('<div class="call-to-action-block"><a href="tel:1069693046" class="phone" target="_blank"><i class="fa fa-phone" aria-hidden="true"></i></a><a href="mailto:salmamohammed841@gmail.com" class="email" target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a><a href="https://api.whatsapp.com/send?phone=1069693046" class="whatsapp" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></div>')

    //$('.redirect-link').on('click', function () {
    //    $('.redirected-module').addClass('test');
    //});

    //urlLastText = window.location.href.substring(window.location.href.lastIndexOf('/') + 2);
    //alert(urlLastText);
    //divID = $('.redirected-module').attr('id');
    //alert(divID);
    //if (urlLastText == divID) {
    //    $(divID).addClass('test');
    //}
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 5) {
        $(".navbar-default").addClass("navbar-fixed-top");
    } else {
        $(".navbar-default").removeClass("navbar-fixed-top");
    }
});

/*Script to detect device*/
function isTouch() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

//function to redirect on home page
function GoToHomePage() {
    window.location = 'https://www.iitms.co.in/';
}