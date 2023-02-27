import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../components/button";
import "./buy.css";

export const Buy = ({ product, rent }) => {
  const dispatch = useDispatch();
  const handelClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product));
  };

  const cartItem = useSelector((state) =>
    state.cart.itemsInCart.find((item) => item.id === product.id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  return (
    <div>
      <b className="product-items__price">{product.price}₾</b>
      <div className="add-to-cart">
        <Button onClick={handelClick} type="primary">
          <MdAddShoppingCart size={"25px"} />
          {addedCount > 0 && (
            <i className="product-items__count">{addedCount}</i>
          )}
        </Button>
      </div>
    </div>
  );
};
