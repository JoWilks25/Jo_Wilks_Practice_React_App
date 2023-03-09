import { useEffect } from "react";
import * as d3 from "d3";
import cssStyles from "../../styles";


// set the dimensions and margins of the graph
const margin = { top: 10, right: 10, bottom: 10, left: 10 };
const width = 500 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const TreeMapChart = ({ data, domain, rangeColours, id }) => {

  useEffect(() => {
    // append the svg object to the body of the page
    const svg = d3.select(`#${id}`)
      .attr("width", "auto")
      .attr("height", "70%")
      .append("g")
      .attr("transform",
        `translate(${margin.left}, ${margin.top})`);

    // read json data
    function createChart(data) {

      // Give the data to this cluster layout:
      const root = d3.hierarchy(data).sum(function (d) { return d.value }) // Here the size of each leave is given in the 'value' field in input data

      // Then d3.treemap computes the position of each element of the hierarchy
      d3.treemap()
        .size([width, height])
        .paddingTop(28)
        .paddingRight(7)
        .paddingInner(3)      // Padding between each rectangle
        //.paddingOuter(6)
        //.padding(20)
        (root)

      // prepare a color scale
      const color = d3.scaleOrdinal()
        .domain(domain)
        .range(rangeColours)

      // And a opacity scale
      const opacity = d3.scaleLinear()
        .domain([10, 30])
        .range([.5, 1])

      // use this information to add rectangles:
      svg
        .selectAll("rect")
        .data(root.leaves())
        .join("rect")
        .attr('cursor', 'pointer')
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("fill", function (d) { return color(d.parent.data.name) })
        .style("opacity", function (d) { return opacity(d.data.value / 2) })
        // .on("mouseover", (d) => {
        //   console.log('d', d)
        //   console.log('d.srcElement.__data__.data', d.srcElement.__data__.data)
        //   // Generate tooltip
        // })
        // .on("click", (d) => {
        //   // Adjust data to display and narrow 
        // })
      // Add Names within the boxes
      svg
        .selectAll("text")
        .data(root.leaves())
        .enter()
        .append("text")
        .attr("x", function (d) { return d.x0 + 5 })    // +10 to adjust position (more right)
        .attr("y", function (d) { return d.y0 + 20 })    // +20 to adjust position (lower)
        .text(function (d) { return d.data.name })
        .attr("font-size", "0.75rem")
        .attr("fill", "white")

      // Add title for the groups
      svg
        .selectAll("titles")
        .data(root.descendants().filter(function (d) { return d.depth == 1 }))
        .enter()
        .append("text")
        .attr("x", function (d) { return d.x0 })
        .attr("y", function (d) { return d.y0 + 21 })
        .text(function (d) { return d.data.name })
        .attr("font-size", "1rem")
        .attr("fill", function (d) { return color(d.data.name) })

      // Add Chart Title
      svg
        .append("text")
        .attr("x", 0)
        .attr("y", 14)    // +20 to adjust position (lower)
        .text(data.name)
        .attr("font-size", "1rem")
        .attr("fill", cssStyles.colours.navy)

    }
    if (data) {
      createChart(data)
    }
    return () => d3.select(`#${id}`).remove()
  }, [
    data
  ])

  return (
    <svg id={id} viewBox={`0, 0, ${width} ${height}`} />
  )
}

export default TreeMapChart
