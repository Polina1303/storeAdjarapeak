import { Rent } from "../rent/rent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../redux/product/reducer";
import "./rent-items.css";

export const RentItems = ({ rent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClickImg = () => {
    dispatch(setCurrentProduct(rent));
    navigate(`/app/${rent.title}`);
  };
  return (
    <div className="rent-items">
      <div className="rent-items__details">
        <img
          onClick={handelClickImg}
          className="rent-items__img"
          src={process.env.PUBLIC_URL + "/img/" + rent.img}
          alt={rent.title}
        />
        <span className="rent-items__title">{rent.title}</span>
        <p>{rent.desc}</p>
        <Rent rent={rent} />
      </div>
    </div>
  );
};
