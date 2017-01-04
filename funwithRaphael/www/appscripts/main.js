require(
	[],
	function () {
        
        console.log("yo, I'm alive!");
        var idElement=document.getElementById("mySVGCanvas");

        var paper = new Raphael(idElement);
        // Find get paper dimensions
        var dimX = paper.width;
        var dimY = paper.height;
        
        //--------------------------------

        var bg = paper.rect(0, 0, dimX, dimY);

        bg.attr({
                "stroke": "#444444",
                "stroke-width": 20,
                "fill" : "#CCAAFF"        // must be filled to get mouse clicks        
        });
        //circle  Yellow  Circle creation
        var Yellowcircle=paper.circle(300, 200, 20);
        Yellowcircle.attr({
                "stroke-width": 2,
                "fill":"yellow"
        });
         var redPath=paper.path("M"+ dimX/2 +","+ dimY/2 +"L 100,200");
        redPath.attr({
                "stroke":"red",
                "stroke-width": 12,
                "stroke-linecap": "round",
                "pointer-events": "none"
        })
        //circle  Blue Circle creation
        var Bluecircle=paper.circle(100, dimY/2, 30);
        Bluecircle.attr({
                "stroke-width": 1,
                "fill":"blue"
        });
        //creating red path

        Bluecircle.node.addEventListener('mousemove', function(ev){
           Bluecircle.attr({"cx" :ev.offsetX, "cy" : ev.offsetY });
           redPath.attr({ "path":"M"+ ev.offsetX +","+ ev.offsetY+"L"+ 300 +","+ 200})
            
        });
        bg.node.addEventListener('mousemove', function(ev){
           Bluecircle.attr({"cx" :ev.offsetX, "cy" : ev.offsetY });
           redPath.attr({ "path":"M"+ ev.offsetX +","+ ev.offsetY+"L"+ 300 +","+ 200})
            
        });


        function animate2() {
            Yellowcircle.animate({r : 40, fill : 'yellow'}, 2000, animate1);
        }
           function animate1() {
            Yellowcircle.animate({r : 60, fill : '#444'}, 2000, animate2);
        }

         animate1();     
});