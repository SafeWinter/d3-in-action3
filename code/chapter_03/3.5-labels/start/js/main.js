// Append a SVG container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 600 700")
  .style("border", "1px solid black");

// Load, format and measure the dataset
d3.csv("../data/data.csv", d => ({
  technology: d.technology,
  count: +d.count
})).then(data => {
  data.sort((a, b) => b.count - a.count);
  createViz(data);
});

// Create the bar graph
const createViz = (data) => {
  // Declare scales
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([0, 450]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.technology))
    .range([0, 700])
    .paddingInner(0.2);

  // Use data-binding to append rectangles
  const byTechName = ({technology: t}) => (t === 'D3.js') ? 'yellowgreen' : 'skyblue';
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("class", d => `bar bar-${d.technology}`)
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("x", 100)
      .attr("y", d => yScale(d.technology))
      .attr("fill", byTechName);

};
