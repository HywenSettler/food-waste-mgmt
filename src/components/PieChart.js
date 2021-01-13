import React, { useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = ({ fooddata }) => {
  useEffect(() => {
    drawChart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const drawChart = () => {
    let pie = d3.pie().value((d) => d.quantity);

    let cScale = d3
      .scaleOrdinal()
      .range(d3.schemeCategory10)
      .domain(fooddata.map((d) => d.name));
    let arc = d3
      .arc()
      .outerRadius(190)
      .innerRadius(45)
      .padAngle(0.01)
      .cornerRadius(5);

    const drawSpace = d3.select('.drawSpace');

    drawSpace
      .selectAll('path')
      .data(pie(fooddata))
      .enter()
      .append('g')
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => {
        console.log(d);
        return cScale(d.data.name);
      })
      .attr('transform', 'translate(190,200)');
    var legend = drawSpace
      .selectAll('.legend')
      .data(cScale.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function (d, i) {
        var height = 22;
        var offset = (22 * cScale.domain().length) / 2;
        var horz = 400;
        var vert = 75 + i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
      });
    legend
      .append('rect')
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', cScale)
      .style('stroke', cScale);

    legend
      .append('text')
      .attr('x', 22)
      .attr('y', 14)
      .text((d) => d);

    // console.log(canvas);
  };

  return (
    <div>
      <svg className="drawSpace ml-3 mt-3" height="400" width="500"></svg>
    </div>
  );
};

export default PieChart;
