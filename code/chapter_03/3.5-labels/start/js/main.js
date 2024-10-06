// Append a SVG container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 600 700");
  // .style("border", "1px solid black");

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

  // Define barAndLabel selection
  const barAndLabel = svg.selectAll('g')
    .data(data)
    .join('g')
      .attr('transform', d => `translate(0, ${yScale(d.technology)})`);

  // Append rect
  const byTechName = ({technology: t}) => 
    (t === 'D3.js') ? 'yellowgreen' : 'skyblue';
  barAndLabel.append('rect')
    .attr("class", d => `bar bar-${d.technology}`)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("x", 100)
    .attr("y", 0)
    .attr("fill", byTechName);

  // Append technology name labels
  barAndLabel
    .append('text')
      .attr('x', 96)
      .attr('y', 12)
      .style('text-anchor', 'end')
      .text(d => d.technology)
      .style('font-family', 'sans-serif')
      .style('font-size', '11px');

  // Append count labels
  barAndLabel
    .append('text')
    .attr('x', d => 100 + xScale(d.count) + 4)
    .attr('y', 12)
    .text(d => d.count)
    .style('font-family', 'sans-serif')
    .style('font-size', '9px');

  // Add new line for vertical axis
  svg.append('line')
    .attr('x1', 100)
    .attr('y1', 0)
    .attr('x2', 100)
    .attr('y2', 700)
    .attr('stroke', 'black');

};
