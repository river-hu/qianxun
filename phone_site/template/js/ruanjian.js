var vm = new Vue({
    el:'.app',
    data:{
        navshow:false
    },
    methods:{
        show:function(){
            if(!this.navshow){
                this.navshow=true;
            }
           
        },
        over:function(){
            this.navshow=false;
        }
    },
    created:function(){

    }
})