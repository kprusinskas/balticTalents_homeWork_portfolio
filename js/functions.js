"use strict";

function pageScroll() {
    var top = $(window).scrollTop();
    if ( top > 80 ) {
        $('header').removeClass('scroll');
    } else {
        $('header').addClass('scroll');
    }
    return;
}

function changeActiveMenuItem() {
    var top = $(window).scrollTop() + 45,
        nuorodu_kiekis = $('#main_nav > a').length,
        nuorodos_tekstas = '';

    for ( var n=0; n<nuorodu_kiekis; n++ ) {
        nuorodos_tekstas = $('#main_nav > a').eq(n).attr('href');
        if ( $(nuorodos_tekstas).position().top <= top ) {
            $('#main_nav > a').removeClass('active');
            $('#main_nav > a').eq(n).addClass('active');
        }
    }
    return;
}

function aboutSectionSocialIcons( icon_list ) {
    var ilgis = icon_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<a href="'+icon_list[i].url+'">\
                        <i class="fa '+icon_list[i].ikona+'"></i>\
                    </a>';
        }
        $('#about_social_icons').html(HTML);
        $('#footer_social_icons').html(HTML);
    }
    return;
}
//------------------------------------------------------- MY SERVICES
function serviceSection( service_list ) {
    var ilgis = service_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<div class="service">\
                        <i class="fa '+service_list[i].ikona+'"></i>\
                        <h3>'+service_list[i].title+'</h3>\
                        <p>'+service_list[i].description+'</p>\
                    </div>';
        }
        $('#services_list').html(HTML);
    }
    return;
}
//------------------------------------------------------- MY RESUME
function resumeSection( list, title, target ) {
    var ilgis = list.length,
        HTML = '';
    if ( ilgis > 0 ) {
            HTML += '<h3>'+title+'</h3>';
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<div class="resumeWork resume-row">\
                        <h4>'+list[i].title+'</h4>\
                        <span>'+list[i].date+'</span>\
                        <p>'+list[i].description+'</p>\
                    </div>';
        }
        $(target).html(HTML);
      }
    return;
}

//------------------------------------------------------- MY BLOGS
function blogSection( blog_list ) {
    var ilgis = blog_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<div class="blog">\
                        <div class="blog-img">\
                          <img src="img/'+blog_list[i].photo+'">\
                        </div>\
                        <div class="blog-summary">\
                          <h3>'+blog_list[i].title+'</h3>\
                          <span>Posted On '+blog_list[i].date+'</span>\
                          <p>'+blog_list[i].description+'</p>\
                          <a href="'+blog_list[i].url+'" class="btn btn-red">Read more</a>\
                        </div>\
                    </div>';
        }
        $('#blog_list').html(HTML);
        fixBlogPostHeights();
    }
    return;
}

function fixBlogPostHeights() {
    var kiekis = $('#blog_list > .blog > .blog-summary').length,
        max_height = 0,
        height = 0,
        max_summary_height = 0,
        summary_height = 0,
        n = [];
    for ( var k=0; k<kiekis; k++ ) {
        height = $('#blog_list > .blog > .blog-summary').eq(k).outerHeight();
        console.log("read array element: "+k+" read height: "+height);
        n.push(height);
            if ( height > max_height ) {
                max_height = height;
            }
        }
    for ( var h=0; h<kiekis; h++ ) {
            $('#blog_list > .blog > .blog-summary').eq(h).css('height', max_height+'px'); // prailgina sektorius
            summary_height = height - n[h] + 20;
            $('#blog_list > .blog > .blog-summary > p').eq(h).css('padding-bottom', summary_height+'px');
          }

    return;
}

// function blogFix() {
//   var width = $(window).width();
// $(window).on('resize', function(){
//    if($(this).width() != width){
//       width = $(this).width();
//       fixBlogPostHeights();
//       console.log("Windows width: "+width)
//    }
// })
// return;
// }

function contactSection( contact_list ) {
    var ilgis = contact_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<div class="contact infoBox">\
                      <div>\
                      <i class="fa '+contact_list[i].icon+'"></i>\
                      </div>\
                      <div>\
                        <h3>'+contact_list[i].title+'</h3>\
                        <span>'+contact_list[i].data_1+'</span>\
                        <span>'+contact_list[i].data_2+'</span>\
                      </div>\
                    </div>';
        }
    }
        $('#contact_list').html(HTML);
    return;
}
