import React from "react";

const Skeleton = ({ count, classNameContainer, classNameContent }) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(<div key={i} className={classNameContent}></div>);
  }

  return <div className={classNameContainer}>{skeletons}</div>;
};

export default Skeleton;
