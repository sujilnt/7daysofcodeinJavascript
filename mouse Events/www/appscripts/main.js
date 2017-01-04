require(
        [],
        function () {
        	var colorBox=document.getElementById("colorDisplay");
        	colorBox.addEventListener("mousemove", function(event) {
               console.log("traget" + event.target);
               event.target.innerHTML= "Mouse x is "+ event.offsetX + " Mouse y is "+ event.offsetY ;
        	})

        }
);