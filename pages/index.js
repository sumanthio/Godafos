import Head from "next/head";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import Card from "../components/Card";
import Currency from "../components/Currency";
import { setCartItems } from "../components/CartItem/cartSlice";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("api/cartData");
      const data = await res.json();
      setLoading(false);
      dispatch(setCartItems(data));
    } catch (error) {
      setLoading(false);
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
    <div className="min-h-screen bg-gradient-to-b from-gray-top from-gray-bottom py-10">
      <Head>
        <title>Godafos - Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row space-x-10 items-start justify-stretch w-full px-32 min-h-full">
        <div className="flex-1 items-stretch justify-stretch">
          <h1 className="text-3xl font-bold mt-10">Shopping Cart</h1>
          <div className="mt-4">
            {loading && (
              <div className="flex-1 items-stretch justify-stretch">
                loading...
              </div>
            )}
            {cartItems.length > 0 &&
              cartItems.map((product, index) => (
                <CartItem product={product} key={index} />
              ))}
            {cartItems.length == 0 && <div className="mx-8 h-24">loading</div>}
          </div>
          <div className="flex flex-row items-stretch justify-between mt-10">
            <h3 className="text-2xl text-blue-600 font-semibold">
              &larr; Continue Shopping
            </h3>
            <h3 className="text-2xl font-bold">
              <Currency value={cartTotal()} />
            </h3>
          </div>
        </div>
        <Card />
      </main>
    </div>
  );
}
