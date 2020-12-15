import React, { useEffect } from "react";
import * as d3 from "d3";

const PieChart = () => {
  useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
    const data = [
      { name: "roti", quantity: 20 },
      { name: "rajma", quantity: 30 },
      { name: "paneer", quantity: 10 },
      { name: "pav bhaji", quantity: 3 },
    ];

    let pie = d3.pie().value((d) => d.quantity);

    let cScale = d3
      .scaleOrdinal()
      .range(d3.schemeCategory10)
      .domain(data.map((d) => d.name));
    let arc = d3
      .arc()
      .outerRadius(200)
      .innerRadius(50)
      .padAngle(0.01)
      .cornerRadius(5);

    const drawSpace = d3.select(".drawSpace");

    drawSpace
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("g")
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => {
        console.log(d);
        return cScale(d.data.name);
      })
      .attr("transform", "translate(250,200)");

    // console.log(canvas);
  };

  return (
    <div>
      <svg className="drawSpace ml-3 mt-3" height="400" width="500"></svg>
    </div>
  );
};

export default PieChart;
