function drawSquare(canvas,context){
	var w = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	context.fillStyle = "lightblue";
	context.fillRect(x,y,w,w);
}

function drawCircles(canvas,context){
	var w = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width );
	var y = Math.floor(Math.random() * canvas.height );
	
	context.beginPath();
	context.arc(x,y,w,0,2*Math.PI,true);
	context.fillStyle = "lightblue";
	context.fill();
}

function fillBackgroundColor(canvas,context){
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj.options[index].value;
	context.fillStyle = bgColor;
	context.fillRect(0,0,canvas.width,canvas.height);
}

function drawText(canvas,context,value){
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj.options[index].value;
	context.fillStyle = fgColor;
	context.font = "bold 6em sans-serif";
	context.textAlign = "center";
	context.fillText(value,canvas.width / 2,canvas.height / 2);

	context.beginPath();
	context.strokeStyle = fgColor;
	context.strokeRect(canvas.width-140,canvas.height - 60,120,40);

	context.fillStyle = fgColor;
	context.font = "bold 2em sans-serif";
	context.textAlign = "right";
	context.fillText("By CFL",canvas.width-30,canvas.height - 30);

}

function previewHandler(){
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	fillBackgroundColor(canvas,context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	if(shape == "squares"){
		for(var squares = 0;squares < 50;squares++){
			drawSquare(canvas,context);
		}
	}else if(shape == "circles"){
		for(var circles = 0;circles < 50;circles++){
			drawCircles(canvas,context);
		}
	}
	var tweet = document.getElementById("tweet");
	
	drawText(canvas,context,tweet.value);
}

function drawSmile(canvas,context){
	context.beginPath();
	context.arc(550,100,70,0,2*Math.PI,true);
	context.fillStyle = "#ddd";
	context.fill();

	context.beginPath();
	context.arc(520,80,10,0,2*Math.PI,true);
	context.stroke();

	context.beginPath();
	context.arc(580,80,2,0,2*Math.PI,true);
	context.fillStyle = "#000";
	context.fill();

	context.beginPath();
	context.arc(520,80,2,0,2*Math.PI,true);
	context.fillStyle = "#000";
	context.fill();

	context.beginPath();
	context.arc(580,80,10,0,2*Math.PI,true);
	context.stroke();

	context.beginPath();
	context.arc(520,115,20,0,2*Math.PI,true);
	context.fillStyle = "rgba(255,100,100,0.03)";
	context.fill();

	context.beginPath();
	context.arc(580,115,20,0,2*Math.PI,true);
	context.fillStyle = "rgba(255,100,100,0.03)";
	context.fill();

	context.beginPath();
	context.moveTo(550,90);
	context.lineTo(540,120);
	context.lineTo(560,120);
	context.stroke();

	context.beginPath();
	context.arc(550,120,25,20*Math.PI/180,160*Math.PI/180,false);
	context.stroke();
}

window.onload = function(){
	var canvas = document.getElementById("smile");
	var context = canvas.getContext("2d");
	drawSmile(canvas,context);

	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}
