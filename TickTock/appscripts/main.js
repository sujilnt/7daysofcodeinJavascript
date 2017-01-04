require(
    [],
    function () {
        var state=0;
            
        console.log("yo, I'm alive!");
        var needlecanvas=document.getElementById("mySVGCanvas")


        var paper = new Raphael(needlecanvas);
        // Find get paper dimensions
        var dimX = paper.canvas.clientWidth;
        var dimY = paper.canvas.clientHeight;

        // set tick and tock locations
        var tickLocation={
            "x":dimX/4,
            "y":dimY/4
        }
        var tockLocation={
            "x":3*dimX/4,
            "y":dimY/4
        }    
       
        //Draw tick/tock text
         var TickName=paper.text(tickLocation.x,tickLocation.y-20,"TICK");
         var TockName=paper.text(tockLocation.x,tockLocation.y-20,"TOCK");
         TickName.attr({
            "font-size":24,
            "font-weight": "bold"
         });
         TockName.attr({
            "font-size":24,
            "font-weight": "bold"
         });   
          // Create the needle
          var needle=paper.path("M "+ dimX/2 + "," + dimY+ " L"+ tickLocation.x + "," + tickLocation.y );
          needle.attr({
            "stroke-width": 3
          });

        //--------------------------------------------------
        // function to draw needle pointing to a location
        var needleAnimate=function(currentLocation){
            console.log(currentLocation);
          needle.animate({
            "path" : "M "+ dimX/2 + "," + dimY + " L"+ currentLocation.x + "," + currentLocation.y
          }, 600 ,"bounce");
        }
        

        // Create a variable to keep track of the state of the needle
        
        // switch state of needle on click
         
         needlecanvas.addEventListener("click", function(){
              if(state===0){
                needleAnimate(tockLocation);
                console.log("tock");
                state=1;
            }
            else{
               needleAnimate(tickLocation); 
               console.log("tick");
               state=0;
            }
         });
    }

);