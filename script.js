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

//var margin = {top: 3%; right: 5%; bottom: 3%; left: 5%}
// var canvas_width = 70%;// - margin.right -margin.left;
// var canvas_height = 70%;// -margin.top - margin.bottom;
var graph = d3.select("#graph")
    .append("svg:svg")
         .attr("width", "35em")
         .attr("height", "35em")
         .attr("id", "svgholder")
    .append("circle")
        .attr("id", 'blueCircle')
        // .attr("x",20em)
        // .attr("y",20%)
        .attr("r", document.getElementById('svgholder').width.baseVal['value']/2)
        .attr("fill","blue")
        .attr("cx",document.getElementById('svgholder').width.baseVal['value']/2)
        .attr("cy",document.getElementById('svgholder').width.baseVal['value']/2)
        .attr("onclick", "toggle()")

var code = d3.select("#code")
    .append("text")
        .attr("id", 'codeForBlueCircle')
        .attr("onclick", "toggle()")
        .attr("width", "35em")
        .attr("height", "35em")
        .text("<circle id=\"blueCircle\" x=\"200\" y=\"200\" r=\"250\" fill=\"blue\" cx=\"400\" cy=\"400\"></circle>")
