import Quantity from "./../Quantity";
import Currency from "../Currency";
import {
  decreaseQuantity,
  deleteCartItem,
  increaseQuantity,
} from "./cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const { title, quantity, uuid, list_price, short_desc } = product;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row space-x-2 items-center justify-between py-6 mt-6 border-b-2 border-gray-200 hover:border-b-4">
      <img
        src="http://lorempixel.com/75/75/food"
        alt="food"
        className="rounded-full w-24 h-24 shadow-lg justify-self-start"
      />
      <div>
        <h3 className="text-1xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{short_desc}</p>
      </div>
      <Quantity
        clickDecrement={() => dispatch(decreaseQuantity(product))}
        quantity={product.quantity}
        clickIncrement={() => dispatch(increaseQuantity(product))}
      ></Quantity>
      <Currency value={quantity * list_price} />
      <button
        className="bg-white"
        onClick={() => dispatch(deleteCartItem(uuid))}
      >
        x
      </button>
    </div>
  );
};

export default CartItem;
