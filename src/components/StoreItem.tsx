import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import Fallback from "./Fallback";
const CardImg = React.lazy(() => import("./CardImg"));
import { useContextValues } from "../hooks/useContextValues";

export interface IStoreItemProps {
  id: number;
  name: string;
  price: string;
  imgUrl: string;
}

export function StoreItem(props: IStoreItemProps) {
  const { id, name, price, imgUrl } = props;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContextValues();

  const quantity: number = getItemQuantity(id);

  return (
    <Card className="h-100">
      <React.Suspense fallback={<Fallback height="180px" />}>
        <CardImg imgUrl={imgUrl} />
      </React.Suspense>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{name}</span>
          <span className="ms-2 text-muted">
            {formatCurrency(Number(price))}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 d-flex align-items-center justify-content-center"
              style={{
                height: "2rem",
              }}
              onClick={() => increaseCartQuantity(id)}
            >
              {" "}
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                className="d-flex align-items-center justify-content-center"
                style={{
                  height: "2rem",
                }}
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
