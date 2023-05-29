import React from "react";
import classNames from "classnames";

const Skeleton = ({ times }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          key={i}
          className={classNames("skeleton", {
            "skeleton--p": i % 2 === 0,
            "skeleton--m": i % 2 !== 0,
          })}
        ></div>
      );
    });
  return boxes;
};

export default Skeleton;
