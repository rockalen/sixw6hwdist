$(document).ready(function () {
    // 漢堡選單
    // $('.ham-icon').click(function(e) {
    //     e.preventDefault();
    //     $('.navbar').toggleClass('active')
    // })
    
    $('#sub-menu-dropdown').hide();
    $('#sub-menu-add-admin').hide();
    // get url path name
    var pageURL = $(location).attr('pathname');
    let params = (new URL(document.location)).searchParams;
    // let title = params.get('title'); // is the string "Jonathan Smith".
    // let age = parseInt(params.get('age')); // is the number 18
    var title = $(this).attr('title');
    console.log(title);

    

    // 產品頁
    if(pageURL == '/product.html'){
        // 設定標題主色粗體
        $("#sub-menu-item > li:first-child > a").addClass("text-main").addClass("font-weight-bold");
        // in second page clone to sub menu    
        $("#sub-menu-item").clone().appendTo("#staticSubMenu");
        $("#staticSubMenu > ul").addClass("container");
        // $("#staticSubMenu > ul").addClass("px-0");
    }
    

    // 動態產生子選單Title
    if (title == 'Assignment'){
        $('#sub-menu-dropdown').show();
    }else if (title == 'Admin'){
        $('#sub-menu-add-admin').show();
    }

    // Assignment 單元replay按鈕跳出簡易編輯畫面
    $('.custom-btn-success').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();
        // 顯示編輯視窗
        $('.replay').show();
    })
    
    $('.custom-btn-cancel').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault(); 
        // 隱藏編輯視窗
        $('.replay').hide();    
    })

    // admin單元arrow_down icon 切換180度
    $('.sub-menu-btn').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();       
        $('.arrow-down').toggleClass('arrow-active')   
    })

     // checkout單元arrow_down icon 切換180度
     $('.pay-list-btn').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();       
        $('.pay-list-arrow_down').toggleClass('arrow-active')   
    })

    $('.navbar-btn').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();       
        $('.navbar-btn').toggleClass('toggle')   
    })
    $( '.navbar-btn' ).click(function() {
        setTimeout(function () {
            $('.navbar-cart').toggleClass('text-md-down-dark');
          }, 500);
        // $( '.navbar-cart' ).delay( 1200 ).toggleClass('text-md-down-dark');
        // $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
      });


    //   $('.product-item01').click(function(){
    //     window.location = product-detail.html;
    //   });

    // $('.navbar-btn').click(function (e) {
        // 取消預設 event 事件
    //     e.preventDefault();       
    //     $('.navbar-cart').toggleClass('text-md-down-dark')   
    // })
    
// console.log($('.nav-bar').css("left"));
    // if ($('.nav-bar').top == 0 ) {  
    //     $('.navbar-cart').toggleClass('text-md-down-dark')
    //     }
    // if ($(window).width() >= 577) {  
    //     $("#navbarNav").removeClass("nav-bar");
    //     }  
           
    // if ($(window).width() <= 576) {  
    //     $("#navbarNav").addClass("nav-bar");
    // }   
});

// $(window).resize(function(){

//     if ($(window).width() >= 577) {  
//         $("#navbarNav").removeClass("nav-bar");
//         $("#navbarNav").removeClass("show")
//         }  
           
//     if ($(window).width() <= 576) {  
//         $("#navbarNav").addClass("nav-bar");
//     }   
// }  );  