/*=================================================================
[Table of Content]

01: Hero slider
02: Menu Page Menu Sticky
03: Category Section
04: Feedback Section 
05: live Auctions Section
06: Client Section
07: Collection slider 
08: Gallery and Slider animated
09: Preloader
10: Document Ready 
11: Window Load
12: Window Scroll
 
====================================================================*/

(function ($) {
   'use strict';
   /*-------------------------------------
      02: Menu Page Menu Sticky
   -------------------------------------*/

   function stickyHeader() {
      var scroll = $(window).scrollTop();
      if (scroll > 70)
         $('.menu_wrapper').addClass('menu_sticky');
      else
         $('.menu_wrapper').removeClass('menu_sticky');
   }

   /*--------------------
    12: Window Scroll
   ----------------------*/
   $(window).on("scroll", function () {
      stickyHeader();
   });

})(jQuery);