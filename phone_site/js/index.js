var vm = new Vue({
    el:'.app',
    data:{
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
        pageindex: 1,
        arr:[],
        navshow:false,
        cooperation:[]
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
        },
        toggle:function(index){
            this.pageindex = index+1;
        }
    },  
    mounted:function(){
    },
    created:function(){
        $.get("http://192.168.1.107:81/qianxun/?s=index/partner/queryAllByPage&page=1&count=12",function(reslut){
            vm.cooperation = reslut.data.data;
        })
        $.get("http://192.168.1.107:81/qianxun/?s=index/example/queryAllByPage&typeid=1&page=1&count=8",function(reslut){
            console.log(reslut.data.data);
            vm.arr = reslut.data.data;
        })
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
