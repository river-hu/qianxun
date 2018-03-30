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
$.get("http://192.168.1.107:81/qianxun/?s=index/banner/queryAll&typeid=6",function(result){
console.log(result.data);
var html = "";
result.data.forEach(function(item){
    html+="<div class=\"swiper-slide\" style=\"background-image:url("+item.image+")\"></div>";
});
$(".swiper-wrapper").html(html);
})
var vm = new Vue({
    el:'.app',
    data:{
        navshow:false,
        pageindex: 1,
        title: [
            {
                name: " 商城案例 "
            },
            {
                name: "微商城案例"
            },
            {
                name: " 软件开发 "
            },
            {
                name: " APP案例 "
            },
        ],
        arr:[]
    },
    watch:{
        pageindex:function(){
            var url = "http://192.168.1.107:81/qianxun/?s=index/example/queryAllByPage&typeid="+this.pageindex+"&page=1&count=8"
            $.get(url,function(reslut){
                console.log(reslut);
                vm.arr = reslut.data.data;
            })
        }
    },
    methods:{
        show:function(){
            if(!this.navshow){
                this.navshow=true;
            }
           
        },
        over:function(){
            this.navshow=false;
        },
        toggle:function(index){
            this.pageindex = index+1;
        }
    },
    created:function(){
        $.get("http://192.168.1.107:81/qianxun/?s=index/example/queryAllByPage&typeid=1&page=1&count=8",function(reslut){
            console.log(reslut.data.data);
            vm.arr = reslut.data.data;
        })
    }
})