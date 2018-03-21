var vm = new Vue({
    el:'.app',
    data:{
        arr_case:[
            {name:"网站建设案例"},
            {name:"品牌Logo设计"},
            {name:"微信商城开发"},
            {name:"网络推广案例"}
        ],
        case_index:0,
        navshow:false
    },
    methods:{
        case_toggle:function(index){
            this.case_index = index;
        },
        show:function(){
            if(!this.navshow){
                this.navshow=true;
            }
           
        },
        over:function(){
            this.navshow=false;
        }
    },  
    mounted:function(){
    },
    created:function(){
       
    }
})
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
});
