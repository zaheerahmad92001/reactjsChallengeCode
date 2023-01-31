import React from "react";

const Typography = (props) => {
  const {error , touched} = props;
  return <p className="text-rose-700 font-mono text-xs">{touched && error}</p>;
};
export default Typography;
