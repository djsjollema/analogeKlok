window.addEventListener("load",function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

  var testbeeld = new Image();
  testbeeld.src = "media/images/testbeeld.gif";

  testbeeld.addEventListener("load",function(){
    context.save();
    context.translate(200,200);
    context.rotate(0.25*Math.PI);
    context.drawImage(testbeeld,-200,-200);
    context.restore();
  })

});
