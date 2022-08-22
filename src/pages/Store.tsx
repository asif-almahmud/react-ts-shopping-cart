import React from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

type Props = {};

export function Store({}: Props) {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
