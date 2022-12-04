import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useContextValues } from "../hooks/useContextValues";
import { formatCurrency } from "../utilities/formatCurrency";

export interface ICartItemProps {
  id: number | string;
  name: string;
  price: number;
  formattedPrice: string;
  imgUrl: string;
  quantity: number;
}

export const CartItem = (props: ICartItemProps) => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    resetCart,
  } = useContextValues();
  const { id, name, price, formattedPrice, imgUrl, quantity } = props;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>{name} </div>
        <div className="text-muted" style={{ fontSize: "0.9375rem" }}>
          {formattedPrice}{" "}
          {quantity > 1 && <span className="text-muted">x {quantity}</span>}
        </div>
        <div className="d-flex align-items-center gap-2">
          <Button
            onClick={() => decreaseCartQuantity(id)}
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "1.625rem",
              height: "1.625rem",
            }}
          >
            -
          </Button>
          <Button
            onClick={() => increaseCartQuantity(id)}
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "1.625rem",
              height: "1.625rem",
            }}
          >
            +
          </Button>
        </div>
      </div>
      <div>{formatCurrency(price * quantity)}</div>
      <Button
        variant="outline-danger"
        onClick={() => removeFromCart(id)}
        className="d-flex align-items-center justify-content-center"
        style={{
          width: "1.625rem",
          height: "1.625rem",
        }}
      >
        &times;
      </Button>
    </Stack>
  );
};
