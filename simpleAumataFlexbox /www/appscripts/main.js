require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

        console.log("Yo, I am alive!");

        // Grab the div where we will put our Raphael paper
        var centerDiv = document.getElementById("centerDiv");
        var clears=document.getElementById("clear");


        // Create the Raphael paper that we will use for drawing and creating graphical objects
        var paper = new Raphael(centerDiv);

        // put the width and heigth of the canvas into variables for our own convenience
        var pWidth = paper.canvas.clientWidth;
        var pHeight = paper.canvas.clientHeight;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
        var rectange=paper.rect(0,0, pWidth,pHeight);
        rectange.attr({
            "fill": "#F1ECD6"
        });

        var greenCircle=paper.circle(pWidth/2,pHeight/2, 20);
        greenCircle.attr({
            "fill": "#8BC34A",
            "stroke-width": 4,
            "stroke": "grey"
        })
        greenCircle.node.addEventListener("mousemove",function(ev){
              greenCircle.attr({
                 "cx":ev.offsetX,
                 "cy":ev.offsetY
              });
              path.prevX=ev.offsetX;
                path.prevY=ev.offsetY;
        })
        var slider =document.getElementById("radiusslider");
        var createCircle;
        var paths;
        rectange.addEventListener("click",function(ev){
               createCircle=paper.circle(ev.offsetX,ev.offsetY, slider.value);
               path.connect(ev.offsetX,ev.offsetY);
                
        });
        //clear button action
        clears.addEventListener("click",function(ev){
            paper.clear();
            paper.put(rectange);
            paper.put(greenCircle);
        });
        var path={
            "prevX":pWidth/2,
            "prevY":pHeight/2,
            "connect":function(newX,newY){
                pathroute="M "+ path.prevX +"," + path.prevY +" L " + newX +","+ newY;
                console.log("M "+ path.prevX +"," + path.prevY +" L " + newX + newY);
                paper.path(pathroute);
                path.prevX=newX;
                path.prevY=newY;
            }
        }
        
        
        

});