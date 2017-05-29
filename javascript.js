$(function(){
	$("#s_text").focus(function(){ $(".text").css("border", "#4791FF solid 1px"); });
	$("#s_text").blur(function(){ $(".text").css("border", "#b8b8b8 solid 1px"); });
	$("#s_btn").click(function(){ $("#s_btn").css("background", "#3075dc"); });





});





window.onload = function()
{
	// document.getElementById("s_text").onfocus = function(){
	// 	document.getElementsByClassName("text")[0].style.border = '#4791FF solid 1px';
	// };
	// document.getElementById("s_text").onblur = function(){
	// 	document.getElementsByClassName("text")[0].style.border = '#b8b8b8 solid 1px';
	// };
	// document.getElementById("s_btn").onclick = function(){
	// 	this.style.backgroundColor = "#3075dc";
	// };

	var set_timer;
	document.getElementsByClassName("setting")[0].onmouseover = function(){
		clearTimeout(set_timer);
		document.getElementsByClassName("set_page")[0].style.display = "block";	
	}
	document.getElementsByClassName("setting")[0].onmouseout = function(){
		set_timer = setTimeout(function(){
			document.getElementsByClassName("set_page")[0].style.display = "none";
		}, 20);
	}
	document.getElementsByClassName("set_page")[0].onmouseover = function(){
		clearTimeout(set_timer);
	}
	document.getElementsByClassName("set_page")[0].onmouseout = function(){
		set_timer = setTimeout(function(){
			document.getElementsByClassName("set_page")[0].style.display = "none";
		}, 20);
	}

	var more_timer;
	var oMoreBtn = document.getElementsByClassName("more_btn")[0];
	var oMorePage = document.getElementsByClassName("more_page")[0];
	var oRightPage = document.getElementById("right_page");
	
	oMoreBtn.onmouseover = function(){
		clearTimeout(more_timer);
		var hg = ((window.innerHeight|| document.documentElement.clientHeight || document.body.clientHeight) - 43) + "px";
		if (hg > "550px") {	
			oRightPage.style.height = hg
			oMorePage.style.height = hg;
		}
		
		oMoreBtn.style.background = "#F9F9F9";
		oMoreBtn.style.color = "#333";
		oMoreBtn.style.margin = "0px";
		oMoreBtn.style.padding  = "19px 13px 0px 11px";
		oMoreBtn.style.borderLeft = "#e7e7e7 solid 1px";
		oMorePage.style.display = "block";
	};

	oMoreBtn.onmouseout = function(){
		more_timer = setTimeout(function(){
			oMoreBtn.style.background = "#3388FF";
			oMoreBtn.style.color = "white";
			oMoreBtn.style.padding = "0px";
			oMoreBtn.style.margin = "19px 13px 0px 12px";
			oMoreBtn.style.borderLeft = "none";
			oMorePage.style.display = "none";
		}, 20);
	}

	oMorePage.onmouseover = function(){
		clearTimeout(more_timer);
	}

	oMorePage.onmouseout = function(){
		more_timer = setTimeout(function(){
			oMoreBtn.style.background = "#3388FF";
			oMoreBtn.style.color = "white";
			oMoreBtn.style.padding = "0px";
			oMoreBtn.style.margin = "19px 13px 0px 12px";
			oMoreBtn.style.borderLeft = "none";
			oMorePage.style.display = "none";
		}, 20);
	}
}