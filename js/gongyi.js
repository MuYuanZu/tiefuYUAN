$(function(){
	var img=$('li',$('.lunbo_tubiao'));
	var imges_zuo=$('.lunbo_zuo',img);
	var imges_you=$('.lunbo_you',img);
	for(let i=0;i<img.length;i++){
		img[i].onmouseenter=function(){
			for(var j=0;j<img.length;j++){
				imges_zuo[j].style.opacity=0;
				imges_you[j].style.opacity=0;
			}
			imges_zuo[i].style.opacity=1;
			imges_you[i].style.opacity=1;
		};

	}

	var lunbo_dian_zuo=$('.lunbo_dian_zuo');
	var lunbo_dian_you=$('.lunbo_dian_you');
	var yuan=$('li',$('.lunbo_dian'));
	for(let i=0;i<yuan.length;i++){
		yuan[i].onmouseenter=function(){
			for(var j=0;j<yuan.length;j++){
				yuan[j].style.background="black";
			}
			yuan[i].style.background="#41a6ed";
		};

	}


})