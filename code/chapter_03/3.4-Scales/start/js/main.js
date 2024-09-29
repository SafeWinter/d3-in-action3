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

  svg.selectAll('rect')
    .data(data)
    .join('rect')
      .attr('class', d => `bar bar-${d.technology}`)
      .attr('x', 0)
      .attr('y', (d, i) => (barHeight + gapSize) * i)
      .attr('width', d => d.count)
      .attr('height', barHeight)
      .style('fill', d => d.technology === 'D3.js' ? 'yellowgreen' : 'skyblue');
};

loadData();