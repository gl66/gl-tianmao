
$(function(){
    var aas =$("a",$(".headinboxa")[0]);
    var lis = $("li",$(".lunbo")[0]);
    var boxx=$(".headin")[0];console.log(boxx)
    var bigbox=$(".headinbox")[0];
    var arrs=["#E8E8E8","#8900FE","#E8E8E8","#E8E8E8","#8CDCD9","#E8E8E8"];
    aas[0].style.opacity = 1;
    boxx.style.background=arrs[0];
    var index = 0;
    var t = setInterval(move, 2000);

    function move() {
        index++;
        if (index == aas.length) {
            index = 0
        }
        for (var i = 0; i < aas.length; i++) {
            animate(aas[i], {opacity: 0});
            //as[i].style.opacity=0;
            lis[i].style.background= "";
        }
        animate(aas[index], {opacity: 1});
        //boxx.style.background=arrs[index];
        animate(boxx,{background:arrs[index]});
       //boxx.style.background=arrs[index];
        //as[index].style.opacity=1;
        lis[index].style.background = "#fff";
    }
    //移入  移出
    bigbox.onmouseover = function () {
        clearInterval(t);
    }
    bigbox.onmouseout = function () {
        t = setInterval(move, 2000)
    }
    //
    lis[0].style.background="";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            for (var j = 0; j < lis.length; j++) {
                animate(aas[j], {opacity: 0});
                //as[j].style.zIndex=0;
                lis[j].style.background = "";
            }
            this.style.background = "#fff";
            animate(aas[this.index], {opacity: 1});
            animate(boxx,{background:arrs[this.index]});
            //as[this.index].style.zIndex=10;
            index = this.index;
        }
    }
  

//放大缩小效果
var box=$('.main4')[0];
      var fdt=$('.fdt',box);
      for(var i=0;i<fdt.length;i++){
        fdt[i].onmouseover=function(){
          // var img=$('img',this)[0]
          animate(this,{width:170,bottom:5,left:-10},300)
        }

        fdt[i].onmouseout=function(){
          // var img=$('img',this)[0]
          animate(this,{width:147,bottom:0,left:0},300)
        }
      }
   

   //左移动效果

      var as=$('.image');
      for(var i=0;i<as.length;i++){
        // this
        as[i].onmouseover=function(){
        
          animate(this,{marginLeft:-20},500)
        }

        as[i].onmouseout=function(){
          var img=$('img',this)[0]
          animate(this,{marginLeft:0},500)
        }
      }

    //导航栏猫头
    var da=$(".da");
    var mt=$(".mt");
    var za=$(".za")[0];
    var mt1=$(".mt1")[0];
    var xa=$(".xa");
    var mt2=$(".mt2");
    for(var i=0;i<mt.length;i++){
        da[i].aa=i;
        da[i].onmouseover=function(){
            animate(mt[this.aa],{top:-14},200)
        }
        da[i].onmouseout=function(){
            animate(mt[this.aa],{top:0},200)
        }
    }
    za.onmouseover=function(){
        animate(mt1,{top:-14},200)
    }
    za.onmouseout=function(){
        animate(mt1,{top:0},200)
    }
    for(var i=0;i<mt2.length;i++){
        xa[i].bb=i;
        xa[i].onmouseover=function(){
            animate(mt2[this.bb],{top:-14},200)
        }
        xa[i].onmouseout=function(){
            animate(mt2[this.bb],{top:0},200);
        }
    }
})