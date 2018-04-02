$('.nav p').click(function () {
    $('.nav ul').stop().slideToggle(400)
})
var swiper = new Swiper('#s0 .swiper-container', {
    pagination: '#s0 .swiper-pagination',
    nextButton: '#s0 .swiper-button-next',
    prevButton: '#s0 .swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    autoplay: 5000,
    loop: true
});

window.onresize = function () {
    aa($('body').css('width').replace('px', ''))
}

function aa(v) {
    const s = v || $('body').css('width').replace('px', '');
    if (s > 768) {
        var swiper1 = new Swiper('#s1 .swiper-container', {
            pagination: '#s1 .swiper-pagination',
            nextButton: '#s1 .xia',
            prevButton: '#s1 .shang',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true,
        });
    } else {
        var swiper1 = new Swiper('#s1 .swiper-container', {
            pagination: '#s1 .swiper-pagination',
            nextButton: '#s1 .xia',
            prevButton: '#s1 .shang',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true,
        });
    }
}
aa();
$.get("http://122.114.73.208/qianxun/?s=index/banner/queryAll&typeid=3", function (result) {
    console.log(result.data);
    var html = "";
    result.data.forEach(function (item) {
        item.image=item.image.replace("\\","\\\\");
        html += "<div class=\"swiper-slide\" style=\"background-image:url(" + item.image + ")\"></div>";
    });
    $(".swiper-wrapper").eq(0).html(html);
})
$.get("http://122.114.73.208/qianxun/?s=index/evaluation/queryAll", function (result) {
    console.log(result.data);
    var html = "";
    result.data.forEach(function (item) {
        html += "<div class=\"swiper-slide ping\" style=\"border:1px solid #ccc\"><h2>"+item.name+"</h2><p>"+item.content+"</p></div>";
    });
    $(".swiper-wrapper").eq(1).html(html);
})

