"use strict";

$(document).ready(function (){

pageScroll();
changeActiveMenuItem();

aboutSectionSocialIcons( socials );
serviceSection( service_info );
resumeSection( work_info, "work", "#resumeWork_list" );
resumeSection( education_info, "education", "#resumeEducation_list" );
// blogFix();
contactSection( contact_info )

blogSection( blog_info );

$(window).scroll(function(){
    pageScroll();
    changeActiveMenuItem();
});

$('.citrina').click(function(){
    $('header').toggleClass('expand-menu');
});


});
