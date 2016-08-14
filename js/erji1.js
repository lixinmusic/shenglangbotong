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