import React, { useEffect, useRef } from "react";
import { select, selectAll } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";
import { transition } from 'd3-transition';

function Axis(props) {
  const { scale, orient, ticks, transform } = props;
  const ref = useRef(null);

  useEffect(() => {
    renderAxis();
  }, []);

  useEffect(() => {
    updateAxis();
  }, [scale, orient, ticks]);

  const renderAxis = () => {
    const node = ref.current;
    let axis;

    if (orient === "bottom") {
      axis = axisBottom(scale);
    }
    if (orient === "left") {
      axis = axisLeft(scale)
        .ticks(ticks);
    }
    select(node).call(axis);
  };

  const updateAxis = () => {
    const t = transition().duration(1000);

    if (orient === "left") {
      const axis = axisLeft(scale).ticks(ticks); 
      selectAll(`.${orient}`).transition(t).call(axis);
    }
  };

  return (
    <g
      ref={ref}
      transform={transform}
      className={`${orient} axis`}
    />
  );
}

export default Axis;
