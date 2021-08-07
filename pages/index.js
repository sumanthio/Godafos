import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import Card from "../components/Card";
import Currency from "../components/Currency";
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
        Number(acc) + Number(item.list_price) * Number(item.quantity),
      0
    );

  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>GODAFOS - Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row space-x-10 items-center w-full px-20 bg-gradient-to-b from-gray-top from-gray-bottom">
        <div className="flex-1 mt-6">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <div className="mt-3 ">
            {cartItems.length > 0 &&
              cartItems.map((product, index) => (
                <CartItem product={product} key={index} />
              ))}
            {cartItems.length == 0 && <div>No Items in your cart</div>}
          </div>
          <div className="flex flex-row items-stretch justify-between space-x-10">
            <h3 className="text-2xl text-blue-600 font-semibold py-2">
              &larr; Continue Shopping
            </h3>
            <h3 className="text-2xl font-bold">
              <Currency value={cartTotal()} />
            </h3>
          </div>
        </div>
        <div className="bg-gray-800 min-h-full">
          <Card />
        </div>
      </main>
    </div>
  );
}
