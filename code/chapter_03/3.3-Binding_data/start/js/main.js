const svg = d3.select('.responsive-svg-container')
    .append('svg')
      .attr('viewBox', '0 0 1200 1600')
      .style('border', '1px solid black');
      
const loadData = async () => {
  const csvData = await d3.csv('../data/data.csv');
  const data = csvData
    // transform CSV data into array of objects
    .map(({technology, count}) => ({
      technology,
      count: +count
    }))
    // order by count desc
    .sort((a, b) => b.count - a.count);

  createViz(data);
};

/**
 * Returns a color based on the technology
 * @param {*} d - data object
 * @returns {string} color
 */
const fillByTechFilter = ({technology: t}) => 
    t === 'D3.js' ? 'yellowgreen' : 'skyblue'; 

const createViz = (data) => {
  const [barHeight, gap] = [20, 5];
  svg.selectAll('rect')
    .data(data)
    .join('rect')
      .attr('height', barHeight)
      .attr('width', d => d.count)
      .attr('x', 0)
      .attr('y', (d, i) => i * (barHeight + gap))
      .attr('fill', fillByTechFilter);
};

loadData();