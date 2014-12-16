jQuery(document).ready(function() {
  images();
    resize(); 
    jQuery('img').each(function () {
            jQuery(this).attr("border", "0");
        });
    jQuery('#body-container').click(function() {
            jQuery(this).toggleClass("hide");
        });
    jQuery('div.views-field-field-about-us-image .field-content:empty').hide();
    jQuery('div.views-field-field-about-us-video-cover .field-content:empty').hide();
    jQuery( ".node-type-project h1#page-title" ).clone().prependTo(jQuery("#body-container"));
    jQuery( ".context-who-we-are #page-title" ).clone().prependTo(jQuery("#body-container"));
    jQuery("#otherprojects-container").clone().appendTo("#body-container");
    jQuery(".mobile-menu-2").clone().appendTo(".mobile-menu-container");
    jQuery(".menu2").clone().appendTo(".mobile-menu-container");
    jQuery(".menu1").clone().appendTo(".mobile-menu-container");
    jQuery(".front .flexslider").delay(2000).fadeIn(500);
    jQuery(".front #section-header").delay(1000).fadeIn(500);
    /*open mobile menu*/
    jQuery(".mobile-menu-link").click(function() {
        jQuery(".mobile-menu-container").addClass("open");
    });
    jQuery('.mobile-menu-container .close-link').click(function() {
        jQuery(".mobile-menu-container").removeClass("open");
    });
     jQuery('.mobile-menu-container a').click(function(e) {
         e.preventDefault();
         newLocation = this.href;
         jQuery(".mobile-menu-container").removeClass("open");
         jQuery('#region-content').delay(1000).fadeOut(500, newpage);
         });
         function newpage() {
         window.location = newLocation;
     }
    jQuery('img').each(function(){
        jQuery(this).addClass(this.width > this.height ? 'landscape' : 'portrait');
    }); 
    
});

jQuery(window).resize(function(){
    images();
    resize();
});

jQuery(window).load(function() {
    /*resize slideshow images*/
    images();
    jQuery('.loader').fadeOut();
    jQuery('.our-album').imagesLoaded(function() {
    jQuery('.our-album').masonry({
      itemSelector: '.album-item',
      columnWidth: '.album-item',
      gutter: 0,
      isFitWidth: true
    });
  });
    
  });

function images(){

  if ( jQuery(window).width() > 739) {
         jQuery(".fullscreen-project-page .flexslider .slides img").each(function(){
                var width  = jQuery(this).width();
                var height = jQuery(this).height();
                var parentWidth  = jQuery(window).width();
                var parentHeight = jQuery(window).height();
                if(width/parentWidth < height/parentHeight)
                {
                    newWidth  = parentWidth;
                    newHeight = newWidth/width*height;
                }
                else
                {
                    newHeight = parentHeight;
                    newWidth  = newHeight/height*width;
                }
                margin_top  =(parentHeight - newHeight) / 2;
                margin_left =0;

                jQuery(this).css({'margin-top' :margin_top  + 'px',
                             'margin-left':margin_left + 'px',
                             'height'     :'auto',
                             'width'      :newWidth    + 'px'});
            });
    jQuery(".product-project-page .flexslider .slides img").css({'height':((jQuery(window).height()-91)+'px')});
    jQuery(".context-who-we-are .flexslider .slides .views-row-2 img").css({'height':((jQuery(window).height()-100)+'px')});
    jQuery(".context-who-we-are .flexslider .slides .views-row-2 img").css({'width':((jQuery(window).width()-0)+'px')});
  }
}
function resize()  {
    /*resize slideshow images*/
    // jQuery(".video-js").css({'width':((jQuery(window).width())+'px')});
    jQuery(".our-album").css({'width':((jQuery(window).width())+'px')});
    jQuery(".mobile-menu-container ul li.leaf").css({'height':((jQuery(window).height()*0.14)+'px')});
    jQuery(".flexslider").css({'width':((jQuery(window).width())+'px')});
    // jQuery(".video-js").css({'height':((jQuery(".video-js").width()*9/16)+'px')});
    if ( jQuery(window).width() > 739) {
        jQuery(".flexslider").css({'height':((jQuery(window).height() -65)+'px')});
        jQuery(".views-row-3 .views-field-field-about-us-video-cover").click(function(e){
          e.preventDefault();
          jQuery(".video-overlay").addClass("show-video");
        });
    }
        // This will fire each time the window is resized:
        else if(jQuery(window).width() <= 480) {
            // if larger or equal
            jQuery('body').addClass("mobile");
            jQuery(".our-album a").click(function(e){
              jQuery(this).removeClass("cboxElement");
              e.preventDefault();
            });
        } else {
            // if smaller
            jQuery('body').removeClass("mobile").addClass("not-mobile");
        }
}