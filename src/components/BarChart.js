import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ fooddata }) => {
  useEffect(() => {
    drawChart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const drawChart = () => {
    let xposition = d3
      .scaleBand()
      .domain(fooddata.map((d) => d.name))
      .range([0, 400])
      .padding(0.2);

    let heightScale = d3
      .scaleLinear()
      .domain([0, d3.max(fooddata, (d) => d.quantity)])
      .range([0, 300]);

    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(fooddata, (d) => d.quantity)])
      .range([300, 0]);

    const canvas = d3.select('.canvas');

    canvas
      .selectAll('rect')
      .data(fooddata)
      .enter()
      .append('rect')
      .attr('height', (d) => heightScale(d.quantity))
      .attr('width', xposition.bandwidth())
      .attr('x', (d) => xposition(d.name) + 10)
      .attr('y', (d) => 300 - heightScale(d.quantity))
      .attr('fill', 'brown');

    canvas
      .append('g')
      .attr('transform', 'translate(0, 300)')
      .call(d3.axisBottom(xposition));

    canvas
      .append('g')
      .attr('transform', 'translate(20, 0)')
      .call(d3.axisLeft(yScale).ticks(5));

    // console.log(canvas);
  };

  return (
    <div>
      <svg
        className="canvas ml-3 mt-3"
        height="400"
        width="600"
        transform="translate(50,50)"
      ></svg>
    </div>
  );
};

export default BarChart;
