import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <LoadingOutlined style={{ fontSize: 35 }} spin />
    </div>
  );
};

export default Loading;
