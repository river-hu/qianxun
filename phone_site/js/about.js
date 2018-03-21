
var map = new AMap.Map('map',{
    zoom: 18,
    center: [113.6878,34.7870]//new AMap.LngLat(116.39,39.9)
});
var marker = new AMap.Marker({
    position: [113.6878, 34.7870],//marker所在的位置
    map:map//创建时直接赋予map属性
});
var infowindow;
var infoWindowContent = '<div class="infowindow-content">' +
  '<div class="amap-info-header">千寻网络公司</div>' +
  '<div class="amap-info-body">郑州市金水区农业路政七街省汇中心B座710室</div></div>';

map.plugin('AMap.AdvancedInfoWindow', function () {
  infowindow = new AMap.AdvancedInfoWindow({
    panel: 'panel',
    placeSearch: true,
    asOrigin: true,
    asDestination: true,
    content: infoWindowContent
  });
  infowindow.open(map, [113.6878,34.7870]);
});
var omap = document.getElementById("map");
if(omap.offsetWidth<800){
     omap.style.height=omap.offsetWidth*0.8+"px";
}
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
