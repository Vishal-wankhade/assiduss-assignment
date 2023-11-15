import React, { useEffect, useRef } from 'react';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

function Line(props) {
  const { xScale, yScale, data, lineGenerator } = props;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const initialData = data.map((d) => ({
      name: d.name,
      value: 0,
    }));

    const line = select(node)
      .append('path')
      .attr('id', 'line')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('d', lineGenerator(initialData));

    // You can uncomment the following code to add circles
    // select(node)
    //   .selectAll('circle')
    //   .data(data)
    //   .enter()
    //   .append('circle')
    //   .attr('class', 'circle')
    //   .attr('stroke', '#ECC417')
    //   .attr('stroke-width', '2')
    //   .attr('fill', '#333')
    //   .attr('r', 3)
    //   .attr('cx', (d, key) => xScale(key))
    //   .attr('cy', (d) => yScale(d.value));

    updateChart();
  }, [data, xScale, yScale, lineGenerator]);

  useEffect(() => {
    updateChart();
  }, [data, xScale, yScale, lineGenerator]);

  const updateChart = () => {
    const t = transition().duration(1000);

    const line = select('#line');
    const dot = selectAll('.circle');

    line
      .datum(data)
      .transition(t)
      .attr('d', lineGenerator);

    // You can uncomment the following code to update circles
    // dot
    //   .data(data)
    //   .transition(t)
    //   .attr('cx', (d, key) => xScale(key))
    //   .attr('cy', (d) => yScale(d.value));
  };

  return <g className="line-group" ref={ref} />;
}

export default Line;
