function toggle(){
    if (document.getElementById('graph').style.opacity != 0.2) {
        document.getElementById('graph').style.opacity = 0.2
        document.getElementById('code').style.display = 'block'
    }
    else {
        document.getElementById('graph').style.opacity = 1
        document.getElementById('code').style.display = 'none'        
    }
}

var graph = d3.select("#graph")
    .append("svg:svg")
         .attr("width", "35em")
         .attr("height", "35em")
         .attr("id", "svgholder")
    .append("circle")
        .attr("id", 'blueCircle')
        .attr("r", document.getElementById('svgholder').width.baseVal['value']/2)
        .attr("fill","blue")
        .attr("cx",document.getElementById('svgholder').width.baseVal['value']/2)
        .attr("cy",document.getElementById('svgholder').width.baseVal['value']/2)
        .attr("onclick", "toggle()")

