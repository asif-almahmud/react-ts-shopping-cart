import React from "react";
import { Card } from "react-bootstrap";
import Fallback from "./Fallback";

type Props = {
  imgUrl: string;
};

export default function CardImg({ imgUrl }: Props) {
  return (
    <Card.Img
      variant="top"
      src={imgUrl}
      height="180px"
      style={{ objectFit: "cover" }}
    ></Card.Img>
  );
}
