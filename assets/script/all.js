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
    console.log(pageURL);
    

    // 產品頁
    if(title == '產品頁'){
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

    // checkout information單元arrow_down icon 切換180度
    $('.info-btn').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();       
        $('.info-arrow').toggleClass('arrow-active')   
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


// axios get data begin
// var uuid = '1e46f421-bbae-4212-8539-55ea1c5329cf';
var token = 'mZVBachVGTFQp9pN6KHRJpzMSalHWDRSMKJImYzifGEtXYyOduTR91wqXgXq';
var apiPath = 'https://course-ec-api.hexschool.io/';

axios.defaults.headers['Authorization'] = `Bearer ${token}`

var productList = {
    data: {
      uuid: '1e46f421-bbae-4212-8539-55ea1c5329cf',
      products: [],
      appid: 'productList',
    },
    getData: function() {
      var vm = this;
      var url = `${apiPath}/api/${vm.data.uuid}/ec/products`;
    // axios非同步api get data
      axios.get(url)
        .then(function (response) {
        vm.data.products = response.data.data;
        vm.render();
      })
    },
    // 渲染畫面函式
    render: function() {    
        var vm = this;
        var app = document.getElementById(vm.data.appid);
        var products = vm.data.products;
        var str = '';
        products.sort(function (a, b) {
            return a.options.order > b.options.order ? 1 : -1;
           });
       
        products.forEach(function(item) {
            var opt = item.options;
            var imgStyle = '';
            var onSale = '';
            var onSaleDel = '';
            // 判斷自訂義物件option 是否undefined
            if (opt === undefined){
                imgStyle = 'card-img';
            }
            else{
                imgStyle = opt.imgStyle;
                if ( opt.onSale && item.origin_price > item.price ){
                    onSale = `<div class="card-img-overlay p-3">
                        <p class="card-text text-right text-white font-size-14 text-capitalize">on sale</p>
                        </div>`
                    onSaleDel = `<del class="text-black-50 ml-2">NT$${ item.origin_price }</del>`;                   
                }               
            }
            
            str += `
            <div class="card">
                <img src="${ item.imageUrl[0] }" class="${ imgStyle }">
                ${ onSale }
                <div class="card-body text-left p-0 pt-1">                   
                    <h5 class="card-title mb-1 text-capitalize font-size-md-24">${ item.title }</h5>                    
                    <p class="card-text font-size-16">
                    ${ item.content }<br>NT$${ item.price }
                    ${ onSaleDel }
                    </p>            
                </div>
            </div>`;
        });
        app.innerHTML = str;
        }
    }
  
  productList.getData();