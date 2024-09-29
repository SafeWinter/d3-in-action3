const svg = d3.select('.responsive-svg-container')
  .append('svg')
    .attr('viewBox', '0 0 600 700')
    .style('border', '1px solid black');

const loadData = async () => {
  const csvData = await d3.csv('../data/data.csv');
  const data = csvData
    .map(({technology, count}) => ({
      technology,
      count: +count
    }))
    .sort((a, b) => b.count - a.count);
  createViz(data);
};

const createViz = (data) => {
  const barHeight = 20;
  const gapSize = 5;

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([0, 450]);

  // testing the xScale function with test cases from fig. 3.26
  testXScale(xScale);

  svg.selectAll('rect')
    .data(data)
    .join('rect')
      .attr('class', d => `bar bar-${d.technology}`)
      .attr('x', 0)
      .attr('y', (d, i) => (barHeight + gapSize) * i)
      .attr('width', d => xScale(d.count))
      .attr('height', barHeight)
      .style('fill', d => d.technology === 'D3.js' ? 'yellowgreen' : 'skyblue');
};

// testing the xScale function with test cases from fig. 3.26
const testXScale = (xScale) => {
  const tests = new Map([
    [198,83], [414, 173], [852, 356], [1078, 450]
  ]);
  tests.forEach((expected, domain) => {
    // const actual = xScale(domain).toFixed(0);
    const actual = xScale(domain);
    console.assert(actual === expected, 
      `Expected ${expected}, but got ${actual} (${domain}, ${expected})`)
  });
}

loadData();