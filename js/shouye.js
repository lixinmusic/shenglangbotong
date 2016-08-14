/*banner的轮播*/
addEvent(window,"load",function(){
    var banner=$(".banner")[0];
	var as=$("a",banner);
	var btn=$(".btn")[0];
	var boxs=$(".box");
    var num=0
	function move(){
         num++;
         if(num>=as.length){
         	num=0
         }
         for (var i = 0; i < as.length; i++) {
         	as[i].style.opacity=0;
         	boxs[i].style.background="#ff9012";
  
         };
         as[num].style.opacity=1;
         boxs[num].style.background="#fff"

}
var t=setInterval(move,2400);

banner.onmouseover=function(){
	clearInterval(t);
}
banner.onmouseout=function(){
	t=setInterval(move,2400);
}

for (var i = 0; i < boxs.length; i++) {
	boxs[i].index=i;
	boxs[i].onmouseover=function(){
		for (var j = 0; j < boxs.length; j++) {
			boxs[j].style.background="#ff9012";
			as[j].style.opacity=0;
		};
		this.style.background="#fff";
		as[this.index].style.opacity=1;
		num=this.index;

	}
}

})



/*俩个图的轮播*/
addEvent(window,"load",function(){
   var righttu=$(".righttu")[0];
   var as=$("a",righttu);
   for (var i = 1; i < as.length; i++) {
   	as[i].style.left="220px";
   };
   var num=0;
   var next=0;
  function movea(){
    next++;
  	if(next>=as.length){
  		next=0;
  	}
  	as[next].style.left="220px";
  	animate(as[num],{left:-220});
  	animate(as[next],{left:0});
    num=next;
 } 	

var t=setInterval(movea,3000);
})

/*小轮播的动画*/
addEvent(window,"load",function(){


  var lunboxs=$(".lunbox")[0];
  var tuyou=$(".imgbox")[0];
  var as=$("a",tuyou);
  var lunL=$(".lunL")[0];
  var lunR=$(".lunR")[0];
  var widths=parseInt(getStyle(as[0],"width"))-10;
  var flag=true;
  tuyou.style.widths=widths+as.length+"px";
   

var t=setInterval(moveL,2000);

   function moveL(){
      animate(tuyou,{left:-widths},function(){
        var first=firstChild(tuyou);
        tuyou.appendChild(first);
        tuyou.style.left=0;
        flag=true;
          

      })
    }

function moveR(){
        var last=lastChild(tuyou);
          beforeChild(tuyou,last)
        tuyou.style.left=-widths+"px";
        animate(tuyou,{left:0},function(){
          flag=true;
        });
        
                      
      }
lunboxs.onmouseover=function(){
  clearInterval(t);
}
lunboxs.onmouseout=function(){
  t=setInterval(moveL,2000);

}
lunR.onclick=function(){
  if(flag){
    flag=false;
moveR()}
}

lunL.onclick=function(){
  if(flag){
    flag=false;
moveL()}

  
}

})
	
