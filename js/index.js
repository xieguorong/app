$(function(){
	function size(origin,type){
		var type=type ||"x";
		if(type=="x"){
			var widths=document.documentElement.clientWidth;
			var sizes=widths/origin*100;
		}else if(type=="y"){
			var heights=document.documentElement.clientHeight;
			var sizes=heights/origin*100;
		}
			document.getElementsByTagName("html")[0].style.fontSize=sizes+"px";
			
		}

size(1134,"y");
	    var myScroll;
//    	alert(myScroll);
      	function loaded(){
      		alert(1)
      		myScroll = new IScroll(".wramper",{
      			mouseWheel:true,
      			bounce:true
      		});
      		myScroll.on("scrollStart",function(){
      			console.log(myScroll.y);
      			if(myScroll.y==myScroll.maxScrollY){
      				down();
      			}
      			if(myScroll.y==0){
      				up();
      			}
      		})
      		var downEle=document.getElementsByClassName("down")[0];
      		var upEle=document.getElementsByClassName("up")[0];
      		var ul=document.querySelector("ul");
      		function down(){
      			myScroll.refresh();
      			downEle.style.display="block";
      			setTimeout(function(){
      				var str="";
      				for(var i=0;i<10;i++){
      					$("<li>new:"+i+"</li>").appendTo(ul);
      				}
      				downEle.style.display="none";
      				myScroll.refresh();
      			},2000)
      		}
      		function up(){
      			upEle.style.display="block";
      			setTimeout(function(){
      				for(var i=0;i<10;i++){
					$("<li>new:"+i+"</li>").prependTo(ul);
				}
				upEle.style.display="none";
				myScroll.refresh();
      			},2000)
      		}
      	}
      	document.addEventListener('touchmove', function (e) { 
      		e.preventDefault(); 
      	}, false);
      	
      	
    /*购物车动效*/
   var arr=["url(img/8d2.jpg)","url(img/755.jpg)","url(img/0.jpg)","url(img/1.jpg)","url(img/95.jpg)",];
   	$(".er").hover(function(){
   		var i=$(this).index();
   	$(".bt").css({background:arr[i]})
   		$(".bt").css("backgroundSize","100% 100%");
   		$(this).css("border","2px solid red")
   },
   function(){
   	$(this).css("border","none")
   }
   )
   
// $(".er").eq(0).mouseover(function(){
// 	$(".bt").css("background","url(img/8d2.jpg)");
// 		$(".bt").css("backgroundSize","100% 100%");
// 	
// }
// )
// 
// $(".er").eq(1).mouseover(function(){
// 	$(".bt").css("background","url(img/755.jpg)");
// 		$(".bt").css("backgroundSize","100% 100%");
// 	
// }
// )
// $(".er").eq(2).hover(function(){
// 	$(".bt").css("background","url(img/0.jpg)")
// 		$(".bt").css("backgroundSize","100% 100%");
// 		$(this).css("border","2px solid red")
// },
// function(){
// 	$(this).css("border","none")
// }
// )
// $(".er").eq(2).mouseover(function(){
// 	$(".bt").css("background","url(img/0.jpg)")
// 		$(".bt").css("backgroundSize","100% 100%");
// }
// )
// 
   
})