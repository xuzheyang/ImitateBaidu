window.onload = function() {
	var oNavDiv = document.getElementById('div_header');
	var aNavA = oNavDiv.getElementsByTagName('a');
	var oLabSet = document.getElementById('div_set');
	var aBtnA = oLabSet.getElementsByTagName('a');
	var oLabMore = document.getElementById('div_more');
	var aMoreA = oLabMore.getElementsByTagName('a');
	var oImgSearch = document.getElementById('img_search');
	// img_search
	var setTimer = null;
	var moreTimer = null;

	///////////////
	// 改变导航条上的前六项颜色(糯米 新闻 hao123 地图 视频 贴吧) //
	///////////////
	aNavA[0].onmouseover = function() {aNavA[0].style.color = "#00C";};
	aNavA[0].onmouseout = function() {aNavA[0].style.color = "#333";};
	aNavA[1].onmouseover = function() {aNavA[1].style.color = "#00C";};
	aNavA[1].onmouseout = function() {aNavA[1].style.color = "#333";};
	aNavA[2].onmouseover = function() {aNavA[2].style.color = "#00C";};
	aNavA[2].onmouseout = function() {aNavA[2].style.color = "#333";};
	aNavA[3].onmouseover = function() {aNavA[3].style.color = "#00C";};
	aNavA[3].onmouseout = function() {aNavA[3].style.color = "#333";};
	aNavA[4].onmouseover = function() {aNavA[4].style.color = "#00C";};
	aNavA[4].onmouseout = function() {aNavA[4].style.color = "#333";};
	aNavA[5].onmouseover = function() {aNavA[5].style.color = "#00C";};
	aNavA[5].onmouseout = function() {aNavA[5].style.color = "#333";};
	aNavA[6].onmouseover = function() {aNavA[6].style.color = "#00C";};
	aNavA[6].onmouseout = function() {aNavA[6].style.color = "#333";};

	////////////
	// 设置按钮效果 //
	////////////
	aNavA[7].onmouseover = function() {
		aNavA[7].style.color = "#001FCF";
		oLabSet.style.display = "block";
		oLabMore.style.display = "none";
		aNavA[8].style.color = "#FFF";
		aNavA[8].style.background = "#38F";
		aNavA[8].style.borderLeft = "#E7E7E7 solid 0px";
		aNavA[8].style.margin = "19px 11px 0px 19px";
		aNavA[8].style.padding = "0 0 0 0";

		for (var i = 0; i < aNavA.length; i++) {			
			aNavA[i].style.marginTop = "0";
		}
		for (var i = 0; i < aNavA.length - 1; i++) {
			aNavA[i].style.paddingTop = "19px";
		}
};

	aNavA[7].onmouseout = function() {
		aNavA[7].style.color = "#333";
		setTimer = setTimeout(function() {
			oLabSet.style.display = "none";
		}, 30);
	};

	oLabSet.onmouseover = function() {
		clearTimeout(setTimer);
	};

	oLabSet.onmouseout = function() {
		setTimer = setTimeout(function() {
			oLabSet.style.display = "none";
		},30);
	};

	////////////
	// 设置菜单效果 //
	////////////
	
	aBtnA[0].onmouseover = function() {aBtnA[0].style.background = "#38F";};
	aBtnA[0].onmouseout = function() {aBtnA[0].style.background = "#FFF";}
	aBtnA[1].onmouseover = function() {aBtnA[1].style.background = "#38F";};
	aBtnA[1].onmouseout = function() {aBtnA[1].style.background = "#FFF";}
	aBtnA[2].onmouseover = function() {aBtnA[2].style.background = "#38F";};
	aBtnA[2].onmouseout = function() {aBtnA[2].style.background = "#FFF";}
	aBtnA[3].onmouseover = function() {aBtnA[3].style.background = "#38F";};
	aBtnA[3].onmouseout = function() {aBtnA[3].style.background = "#FFF";}


	//////////////
	// 更多产品按钮效果 //
	//////////////
	aNavA[8].onmouseover = function() {
		oLabSet.style.display = "none";
		oLabMore.style.display = "block";
		aNavA[8].style.color = "#333";
		aNavA[8].style.background = "#F9F9F9";
		aNavA[8].style.borderLeft = "#E7E7E7 solid 1px";
		aNavA[8].style.margin = "0 0 0 0";
		aNavA[8].style.padding = "19px 11px 0px 18px";
		for (var i = 0; i < aNavA.length; i++) {			
			aNavA[i].style.marginTop = "0";
		}
		for (var i = 0; i < aNavA.length - 1; i++) {
			aNavA[i].style.paddingTop = "19px";
		}
	};

	aNavA[8].onmouseout = function() {
		moreTimer = setTimeout(function() {
			// oLabSet.style.display = "none";
	
			oLabMore.style.display = "none";
			aNavA[8].style.color = "#FFF";
			aNavA[8].style.background = "#38F";
			aNavA[8].style.borderLeft = "#E7E7E7 solid 0px";
			aNavA[8].style.margin = "19px 11px 0px 19px";
			aNavA[8].style.padding = "0 0 0 0";

			for (var i = 0; i < aNavA.length; i++) {			
				aNavA[i].style.marginTop = "0";
			}
			for (var i = 0; i < aNavA.length - 1; i++) {
				aNavA[i].style.paddingTop = "19px";
			}
		}, 30);
	};

	oLabMore.onmouseover = function() {
		clearTimeout(moreTimer);
	};

	oLabMore.onmouseout = function() {
		moreTimer = setTimeout(function() {
			// oLabSet.style.display = "none";
	
			oLabMore.style.display = "none";
			aNavA[8].style.color = "#FFF";
			aNavA[8].style.background = "#38F";
			aNavA[8].style.borderLeft = "#E7E7E7 solid 0px";
			aNavA[8].style.margin = "19px 11px 0px 19px";
			aNavA[8].style.padding = "0 0 0 0";

			for (var i = 0; i < aNavA.length; i++) {			
				aNavA[i].style.marginTop = "0";
			}
			for (var i = 0; i < aNavA.length - 1; i++) {
				aNavA[i].style.paddingTop = "19px";
			}
		}, 30);
	};

	/////////////////
	// 设置更多选项的按键效果 //
	/////////////////
	aMoreA[1].onmouseover = function() {aMoreA[1].style.textDecoration = "underline";};
	aMoreA[1].onmouseout = function() {aMoreA[1].style.textDecoration = "none";};
	aMoreA[2].onmouseover = function() {aMoreA[2].style.textDecoration = "underline";};
	aMoreA[2].onmouseout = function() {aMoreA[2].style.textDecoration = "none";};
	aMoreA[3].onmouseover = function() {aMoreA[3].style.textDecoration = "underline";};
	aMoreA[3].onmouseout = function() {aMoreA[3].style.textDecoration = "none";};
	aMoreA[4].onmouseover = function() {aMoreA[4].style.textDecoration = "underline";};
	aMoreA[4].onmouseout = function() {aMoreA[4].style.textDecoration = "none";};
	aMoreA[5].onmouseover = function() {aMoreA[5].style.textDecoration = "underline";};
	aMoreA[5].onmouseout = function() {aMoreA[5].style.textDecoration = "none";};
	aMoreA[6].onmouseover = function() {aMoreA[6].style.textDecoration = "underline";};
	aMoreA[6].onmouseout = function() {aMoreA[6].style.textDecoration = "none";};

	oImgSearch.onmouseover = function() {oImgSearch.style.backgroundPosition = "0px -20px"};
	oImgSearch.onmouseout = function() {oImgSearch.style.backgroundPosition = "0px 0px"};	
	oImgSearch.onclick = function() {alert("功能暂未开放，敬请期待！^_^");}
}
