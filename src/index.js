window.onload = function(e)
{
	
	/**
	 * 设置画布大小
	 */
	var canvas    = document.querySelector('#demoCanvas');
	canvas.width  = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	
	
	//创建舞台
	stage = new createjs.Stage("demoCanvas");
	
	
	//创建圆形
	circle = new createjs.Shape();
	circle.graphics.beginFill("red").drawCircle(0, 0, 40);
	circle.x = 50;
	circle.y = 50;
	
	
	//添加到舞台
	stage.addChild(circle);
	
	
	//渲染舞台
	stage.update();
	
	
	//点击事件
	circle.addEventListener("click", function(evt) 
	{
	   console.log('圆被点击',evt)
	   circle.x +=50;
	   stage.update();
	   
	})
}

