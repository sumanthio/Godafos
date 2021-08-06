import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import Card from "../components/Card";
import { setCartItems } from "../components/CartItem/cartSlice";

export default function Home() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fetchCartItems = async () => {
    try {
      const res = await fetch("api/cartData");
      const data = await res.json();
      dispatch(setCartItems(data));
    } catch (error) {
      console.log(error);
    }
  };

  // client side fetch instead of Next's SSR or Static rendering because the data should be loaded per page view.
  useEffect(() => {
    fetchCartItems();
  }, []);

  const cartTotal = () =>
    cartItems.reduce(
      (acc, item) =>
        Number(acc) + (Number(item.list_price) / 100) * Number(item.quantity),
      0
    );

  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>GODAFOS - Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row items-center w-full flex-1 px-20 ">
        <div className="flex-1 mt-6">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <div className="mt-3 ">
            {cartItems.map((product, index) => (
              <CartItem product={product} key={index} />
            ))}
          </div>
          <h3 className="text-2xl text-blue-600 font-semibold py-2">
            &larr; Continue Shopping
          </h3>
          <h3 className="text-2xl font-bold">{cartTotal()}</h3>
        </div>
        <div className="bg-gray-800 min-h-full w-96">
          <Card />
        </div>
      </main>
    </div>
  );
}
