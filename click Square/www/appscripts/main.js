require(
    [],
    function () {
         var pWidth,pHeight,centerWidth,centerHeight,borderrectangle,startcircle,starttext, counter=0,startTIme;
         var mySVGCanvas=document.getElementById("mySVGCanvas");

        var paper = new Raphael(mySVGCanvas);
        pWidth=mySVGCanvas.clientWidth;
        pHeight=mySVGCanvas.clientHeight;
        centerWidth=pWidth/2;
        centerHeight=pHeight/2;

        var StartButton=function(){
        startcircle=paper.circle(centerWidth,centerHeight,25);
        startcircle.attr({
        	"stroke":"steelblue",
        	"fill":"tomato",
        	"cursor":"pointer"
        });

        starttext=paper.text(centerWidth, centerHeight, "Start");
        starttext.attr({
        	"cursor":"pointer"
        });

        var RemoveElement=function(){
        	starttext.remove();
        	startcircle.remove();
        }
        var CreateAndStart=function(){
        	RemoveElement();
        	beginGame();
        }

        startcircle.node.addEventListener("click",CreateAndStart);
        starttext.node.addEventListener("click",CreateAndStart);

        }
        StartButton();
        
        
        var beginGame=function(){
        startTIme=Date.now(); 	
        borderrectangle=paper.rect(10,10, 60,60);
        borderrectangle.attr({
        	"cursor": "pointer",
        	"stroke-width":"5",
        	"fill":"white",
        	"stroke":"steelblue"
        });
        borderrectangle.node.addEventListener("click", function(){ 
        	var Xvalue=RandomNumber(0,pWidth-60);
        	var Yvalue=RandomNumber(0,pHeight-60);
        	borderrectangle.attr({
                    "x":Xvalue,
                    "y":Yvalue	
        	});
        	counter++;
        	if(counter===10){
        		currentTIme=Date.now();
        		TimeTaken=(currentTIme-startTIme)/1000;
        		borderrectangle.remove();
        		alert("gameOver , You took "+TimeTaken +" seconds to finish ." );
        		StartButton();
        		counter=0;
        	}
        });

        }
        var RandomNumber=function(m,n){
        	Rrange= Math.random(0,1);
        	rnum=Rrange*(n-m)+m;
        	rnum=Math.floor(rnum);
        	return rnum;
        }        
        
        
      





 
    }
);