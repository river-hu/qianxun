    $('.nav p').click(function () {
        $('.nav ul').stop().slideToggle(400)
    })
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 5000,
        loop: true
    });
    $.get("http://122.114.73.208/qianxun/?s=index/banner/queryAll&typeid=4",function(result){
    console.log(result.data);
    var html = "";
    result.data.forEach(function(item){
        item.image=item.image.replace("\\","\\\\");
        html+="<div class=\"swiper-slide\" style=\"background-image:url("+item.image+")\"></div>";
    });
    $(".swiper-wrapper").html(html);
})
$.get("http://122.114.73.208/qianxun/?s=index/design/queryAll&typeid=1",function(result){
    console.log(result.data);
    var html = "";
    result.data.forEach(function(item){
        html+="<div  style=\"margin-bottom: 10px;\" class=\"col-md-3 col-xs-6 \"><img src='"+item.image+"' style=\"width: 100%;\"></div>";
    });
    $(".logolist").html(html);
})
$.get("http://122.114.73.208/qianxun/?s=index/design/queryAll&typeid=2",function(result){
    console.log(result.data);
    var html = "";
    result.data.forEach(function(item){
        html+="<div  style=\"margin-bottom: 10px;\" class=\"col-md-3 col-xs-6 \"><img src='"+item.image+"' style=\"width: 100%;\"></div>";
    });
    $(".vilist").html(html);
})
$.get("http://122.114.73.208/qianxun/?s=index/design/queryAll&typeid=3",function(result){
    console.log(result.data);
    var html = "";
    result.data.forEach(function(item){
        html+="<div  style=\"margin-bottom: 10px;\" class=\"col-md-3 col-xs-6 \"><img src='"+item.image+"' style=\"width: 100%;\"></div>";
    });
    $(".uilist").html(html);
})
