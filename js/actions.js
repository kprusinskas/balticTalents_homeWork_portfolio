"use strict";


$(document).ready(function () {

  pageScroll();
  changeActiveMenuItem();

  $('body').on('click', '.gallery > .filter > .item', function(){
    var filtras = $(this).text();

    $('.gallery > .filter > .item').removeClass('active');
    $(this).addClass('active');

    if ( filtras === 'ALL' ) {
        $('.gallery > .list > .item').show();
    } else {
        $('.gallery > .list > .item').hide();
        $('.gallery > .list > .item[data-tag="'+filtras+'"]').show();
    }
});

  aboutSectionSocialIcons( socials );
  serviceSection( service_info );
  resumeSection( work_info, "work", "#resumeWork_list" );
  resumeSection( education_info, "education", "#resumeEducation_list" );
  // blogFix();
  gallerySection( '#portfolio_gallery', gallery_info );
  contactSection( contact_info );

  slideshowSection( '#carousel', slideshow_info ); // dirbam cia.

  blogSection(blog_info);

  $(window).scroll(function () {
    pageScroll();
    changeActiveMenuItem();
  });

  $('.citrina').click(function () {
    $('header').toggleClass('expand-menu');
  });


});
