require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

        console.log("Yo, I am alive!");

        // Grab the div where we will put our Raphael paper
        var centerDiv = document.getElementById("centerDiv");

        // Create the Raphael paper that we will use for drawing and creating graphical objects
        var paper = new Raphael(centerDiv);

        // put the width and heigth of the canvas into variables for our own convenience
        var pWidth = paper.canvas.clientWidth;
        var pHeight = paper.canvas.clientHeight;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
        //---------------------------------------------------------------------
        // Generate a random number in [m, n-1]
        var randInt = function( m, n ) {
            var range = n-m;
            var frand = Math.random()*range;
            return m+Math.floor(frand);
        }
        //-----------------------------------------------------------------------
         var block=[];
        var counter=0;
        var neighbour=1;
        var numberOfStrips=10;
        var i=0;
        var RectangleWidth=pWidth/numberOfStrips;
        var creatingRectangle=function(){
        while(counter<numberOfStrips){
            block[counter]=paper.rect(counter * RectangleWidth, 0, RectangleWidth, pHeight);
            block[counter].color="rgb("+ randInt(0,255) +","+ randInt(0,255) +"," + randInt(0,255) +")";
            block[counter].attr({
                "fill":block[counter].color,
                "stroke-width":"1"
            });
            counter++;
            console.log(block);

        }
        }
        creatingRectangle();
        // passing color to neighbour 
        var colorPassing=function(){
            console.log("starting 123");
            counter=0;
            neighbour=1;
           while(neighbour <= numberOfStrips){
            
            if(neighbour===(numberOfStrips)){
                block[counter].color="rgb("+ randInt(0,255) +","+ randInt(0,255) +"," + randInt(0,255) +")";
                console.log("9");
            }
            else{
                block[counter].color=block[neighbour].color;
            }
            block[counter].attr({
                "fill":block[counter].color,
                "stroke-width":"1"
            });
            counter++;
            neighbour++;
            console.log(neighbour );

         }
        }
        var test=function(){
            counter=0;
            creatingRectangle();
            
        }
        colorPassing();
        var timer=function (){
           setInterval(colorPassing, 300);
            console.log("timer.....");
        }
        timer();




});