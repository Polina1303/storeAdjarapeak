import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deletItemFromCart,
  minusItem,
  plusItem,
} from "../../redux/cart/reducer";
import { Button } from "../button";
import "./cart-item.css";

export const CartItem = ({ img, title, price, id, count }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deletItemFromCart(id));
  };

  const handleClickPlus = () => {
    dispatch(plusItem({ id }));
  };
  const handleClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  return (
    <div className="cover">
      <div className="cart-item">
        <img
          className="cart-item__img"
          src={process.env.PUBLIC_URL + "/img/" + img}
          alt={title}
        ></img>
        <div className="cart-item__title">
          <span>{title}</span>
        </div>
        {count >= 0 ? (
          <div className="cart-item__count_but">
            <Button onClick={handleClickMinus}>
              <AiOutlineMinusCircle className="cart-item__count" size={20} />
            </Button>
            {count}
            <Button onClick={handleClickPlus}>
              <AiOutlinePlusCircle className="cart-item__count" size={20} />
            </Button>
          </div>
        ) : (
          handleClick()
        )}
        <div>
          <span className="cart-item__price">{price * count}₾</span>
        </div>
        <div>
          <TiDeleteOutline
            size={25}
            className="cart-item__delete"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
