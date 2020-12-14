import React, { useEffect } from "react";
import * as d3 from "d3";

const BarChart = () => {
  useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
    const data = [
      { name: "roti", quantity: 20 },
      { name: "rajma", quantity: 30 },
      { name: "paneer", quantity: 10 },
      { name: "pav bhaji", quantity: 3 }
    ];

    let xposition = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, 400])
      .padding(0.2);

    let heightScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.quantity)])
      .range([0, 300]);

    const canvas = d3
      .select(".canvas")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("height", (d) => heightScale(d.quantity))
      .attr("width", xposition.bandwidth())
      .attr("x", (d) => xposition(d.name))
      .attr("y", (d) => 300 - heightScale(d.quantity))
      .attr("fill", "blue");

    // console.log(canvas);
  };

  return (
    <div>
      <svg className="canvas" height="400" width="500"></svg>
    </div>
  );
};

export default BarChart;
