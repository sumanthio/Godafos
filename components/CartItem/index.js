import Quantity from "./../Quantity";
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
    <div className="flex flex-row space-x-2 items-center justify-around p-6 mt-6 border shadow-lg rounded-xl hover:bg-gray-100 focus:text-blue-600">
      <img
        src="http://lorempixel.com/75/75/food"
        alt="food"
        className="rounded-full w-24 h-24 shadow-lg"
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
      <p>{`$ ${(quantity * list_price) / 100}`}</p>
      <button
        className="bg-white"
        onClick={() => dispatch(deleteCartItem(uuid))}
      >
        &larr;
      </button>
    </div>
  );
};

export default CartItem;
