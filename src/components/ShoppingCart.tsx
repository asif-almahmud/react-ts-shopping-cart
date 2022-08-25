import { Offcanvas, Stack } from "react-bootstrap";
import { useContextValues } from "../hooks/useContextValues";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";

interface IShoppingCart {}

export const ShoppingCart = (props: IShoppingCart) => {
  const { cartItems, cartIsShown, showCart } = useContextValues();

  return (
    <Offcanvas show={cartIsShown} placement="end" onHide={showCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length < 1 ? (
          <div className="text-center">Your cart is empty</div>
        ) : (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total&nbsp;&nbsp;&nbsp;
              {formatCurrency(
                cartItems.reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
