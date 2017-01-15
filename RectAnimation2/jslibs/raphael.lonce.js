// Use this library to:
//     a) paper.put(element) - to put an Element created by paper back on a paper after it has been removed
//     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
define(
	[],
	function(){
		var paper=new Raphael(1,1,1,1);
        paper.circle(0,0,1).__proto__.addEventListener = function (ev, fn) {this.node.addEventListener(ev, fn);};
        paper.__proto__.put = function(el){this.canvas.appendChild(el.node);};
});
