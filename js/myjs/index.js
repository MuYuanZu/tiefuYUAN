window.onload=function(){
	var num=0;
	var imga = document.querySelector('.banner ul li');
	var banner = document.querySelector('.banner'); 
	var btn = document.querySelectorAll('.banner>div>div');
	var btnleft = document.querySelector('.left');
	var btnright = document.querySelector('.right');
	console.log(btnright);
	function move(type='r'){
		if(type=='r'){
			num++;
			if(num>2){
				num=0;
			}
		}
		if(type=="l"){
			num--;
			if(num<0){
				num=2;
			}
		}		
		
		imga.style.background=`url(image/myimg/banner${num}.jpg) center center no-repeat / cover`;
		for(var i=0;i<btn.length;i++){
			btn[i].style.background="#fff";
		}
		btn[num].style.background="#c77c51";	
	}
	var t;
	t=setInterval(function(){
		move();
	},6000);

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		 t=setInterval(function(){
			move();
		},6000);
	}
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			for(let j=0;j<btn.length;j++){
				btn[j].style.background="#fff";
			}
			btn[i].style.background="#c77c51";
			imga.style.background=`url(image/myimg/banner${i}.jpg) center center no-repeat / cover`;
			num=i;
		}
	}

	btnleft.onclick=function(){
		
		move("l");
		
	}
	btnright.onclick=function(){
	
		move();
	}

}