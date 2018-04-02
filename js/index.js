$.get("http://192.168.1.107:81/qianxun/?s=index/banner/queryAll&typeid=1",function(result){
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
        cooperation:[],
        newindex:1,
        newtitle: [
            {
                name: "运营技巧"
            },
            {
                name: "建站知识"
            },
            {
                name: "新闻资讯"
            }
        ],
        newarr:[]
    },
    watch:{
        pageindex:function(){
            var url = "http://192.168.1.107:81/qianxun/?s=index/example/queryAllByPage&typeid="+this.pageindex+"&page=1&count=8"
            $.get(url,function(reslut){
                console.log(reslut);
                vm.arr = reslut.data.data;
            })
        },
        newindex:function(){
            var url = "http://192.168.1.107:81/qianxun/?s=index/information/queryAllByPage&page=1&count=8&type_id="+this.newindex;
            $.get(url,function(reslut){
                console.log(reslut);
                vm.newarr = reslut.data.data;
            })
        }
    },
    methods:{
        case_toggle:function(index){
            this.case_index = index;
        },
        toggle:function(index){
            this.pageindex = index+1;
        },
        newtoggle:function(index){
            this.newindex = index+1;
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
        $.get("http://192.168.1.107:81/qianxun/?s=index/information/queryAllByPage&page=1&count=8&type_id=1",function(reslut){
            console.log(reslut.data.data);
            vm.newarr = reslut.data.data;
        })

    }
})
