// Append a SVG container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 600 700")  // 同步改小 viewBox 的尺寸
    .style("border", "1px solid black");

// Load, format and measure the dataset
const drawBarChart = async () => {
  const csvData = await d3.csv('../data/data.csv');
  const data = csvData.map(({technology, count}) => ({
        technology, 
        count: +count
      }))
      .sort((a, b) => b.count - a.count);

  createViz(data);
};

// Create the bar graph
const createViz = (data) => {

  // 创建 X 轴的比例尺函数
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([0, 450]); // （= 600 - 100 - 50 (px)）

  // 运行测试
  testXScale(xScale);

  // Use data-binding to append rectangles
  const barHeight = 20;
  svg.selectAll('rect')
    .data(data)
    .join('rect')
      .attr('class', d => `bar bar-${d.technology}`)
      .attr('width', d => xScale(d.count))
      .attr('height', barHeight)
      .attr('x', 0)
      .attr('y', (d, i) => (barHeight + 5) * i)
      .attr('fill', d => d.technology === 'D3.js' ? 'yellowgreen' : 'skyblue');

};

// 测试 xScale 函数
const testXScale = (xScale) => {
  // console.log('Testing the xScale ...');
  const testData = new Map([
    [198, 83],
    [414, 173],
    [852, 356],
    [1078, 450]
  ]);

  mocha.setup('bdd');
  const { expect } = chai;

  // 测试用例
  describe('Test xScale function:', () => {
    testData.forEach((expected, domain) => {
      it(`Given a domain value ${domain}, should return ${expected}.`, () => {
        // expect(xScale(domain)).to.equal(expected);
        const actual = xScale(domain);
        const diff = Math.abs(actual - expected);
        expect(diff).to.be.lessThan(1);
      });
    });
  });

  // 运行测试
  mocha.run();
};

drawBarChart();