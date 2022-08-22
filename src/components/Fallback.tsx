import React from "react";
import "./Fallback.css";

type Props = {
  animtype?: "circle" | "dot";
  height?: string;
};

export default function Fallback({ animtype = "dot", height }: Props) {
  return (
    <>
      {animtype === "circle" && (
        <div
          className="outerDiv"
          style={{
            width: "100%",
            height: `${height ? height : "100%"}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="loader" />
        </div>
      )}
      {animtype === "dot" && (
        <div
          className="spinner"
          style={{
            width: "100%",
            height: `${height ? height : "100%"}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      )}
    </>
  );
}
