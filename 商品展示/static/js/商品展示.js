window.onload=function(){
	var img=document.getElementsByTagName("img");
	var show_up=document.getElementByClassName("show_up")[0];
	img[0].onmouseover=function(){
		show_up.style.backgroundImage="url(../../../js   按例/商品展示/static/img/01big.jpg)";
	}
	img[1].onmouseover=function(){
		show_up.style.backgroundImage="url(../../../js   按例/商品展示/static/img/02big.jpg)";
	}
}
//window.onload=function(){ 
//	img=document.getElementsByTagName("img");
//	var show_up=document.getElementsByClassName("show_up")[0];
//	img[0].onmouseover=function(){
//		show_up.style.backgroundImage="url(img/01big.jpg)";
//	}
//	img[1].onmouseover=function(){
//		show_up.style.backgroundImage="url(img/02big.jpg)";
//	}
//	img[2].onmouseover=function(){
//		show_up.style.backgroundImage="url(img/03big.jpg)";
//	}
//	img[3].onmouseover=function(){
//		show_up.style.backgroundImage="url(img/04big.jpg)";
//	}
//	img[4].onmouseover=function(){
//		show_up.style.backgroundImage="url(img/05big.jpg)";
//	}
//}