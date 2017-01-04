require(
    [],
    function () {
     			console.log("yo");
                var doButton=document.getElementById("doitButton");
                var colorDisplay=document.getElementById("colorDisplay");
            
                doButton.addEventListener("click", function(e){
                var usercolorTag=document.getElementById("userColor");
                var hscolor=usercolorTag.value;
                colorDisplay.style.backgroundColor=hscolor;
                var csstext=document.getElementById("csstextbackground");
                csstext.innerHTML="background : "+ hscolor +";" ;
      
                });
                var slider=document.getElementById("mySlider");
                var opacityback=document.getElementById("opacityback");
                slider.addEventListener("input", function(ev){
                	var opacity =colorDisplay.style.opacity=slider.value;
                	opacityback.innerHTML="opacity : "+ opacity + ";" ;
                });
                



    }
);
