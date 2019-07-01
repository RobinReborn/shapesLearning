function toggle(){
    if (document.getElementById('graph').style.display != 'none') {
        document.getElementById('graph').style.display = 'none'
        document.getElementById('code').style.display = 'block'
    }
    else {
        document.getElementById('graph').style.display = 'block'
        document.getElementById('code').style.display = 'none'        
    }
}

var margin = {top: 30, right: 50, bottom: 30, left: 50}
var canvas_width = 700 - margin.right -margin.left;
var canvas_height = 700 -margin.top - margin.bottom;
var graph = d3.select("#graph")
    .append("svg:svg")
        .attr("width", canvas_width + margin.left + margin.right)
        .attr("height", canvas_height + margin.top + margin.bottom)
    .append("circle")
        .attr("id", 'blueCircle')
        .attr("x",200)
        .attr("y",200)
        .attr("r", 250)
        .attr("fill","blue")
        .attr("cx",400)
        .attr("cy",400)
        .attr("onclick", "toggle()")

var code = d3.select("#code")
    .append("text")
        .attr("id", 'codeForBlueCircle')
        .attr("onclick", "toggle()")
        .text("<circle id=\"blueCircle\" x=\"200\" y=\"200\" r=\"250\" fill=\"blue\" cx=\"400\" cy=\"400\"></circle>")
