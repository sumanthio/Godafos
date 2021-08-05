import Head from "next/head";
import { useState } from "react";
import Quantity from "../components/Quantity";
import Card from "../components/Card";

export default function Home() {
  const [cartData, setCartData] = useState([
    {
      uuid: "1",
      title: "Chicken Biryani",
      short_desc: "Short desc",
      long_desc: "Long desc",
      quantity: 1,
      list_price: 4000,
    },
    {
      uuid: "2",
      title: "Kalmi Kebab",
      short_desc: "Short desc",
      long_desc: "Long desc",
      quantity: 1,
      list_price: 4000,
    },
    {
      uuid: "3",
      title: "Apollo Fish",
      short_desc: "Short desc",
      long_desc: "Long desc",
      quantity: 1,
      list_price: 4000,
    },
  ]);

  const cartTotal = () =>
    cartData.reduce(
      (acc, item) =>
        Number(acc) + (Number(item.list_price) / 100) * Number(item.quantity),
      0
    );

  const updateCart = (uuid, updateQuantity) => {
    const tempCart = [...cartData];
    const currentCartItemIndex = tempCart.findIndex(
      (cart) => cart.uuid === uuid
    );
    tempCart[currentCartItemIndex].quantity = updateQuantity;
    setCartData([...tempCart]);
  };

  const decreaseQuantity = ({ uuid, quantity }) => {
    // min quantity per purchase
    quantity = quantity < 1 ? quantity : quantity - 1;
    updateCart(uuid, quantity);
  };

  const increaseQuantity = ({ uuid, quantity }) => {
    // max quantity per purchase
    quantity = quantity >= 10 ? quantity : quantity + 1;
    updateCart(uuid, quantity);
  };

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
            {cartData.map((product, index) => (
              <div
                key={index}
                className="flex flex-row space-x-2 items-center justify-around p-6 mt-6 border shadow-lg rounded-xl hover:bg-gray-100 focus:text-blue-600"
              >
                <img
                  src="http://lorempixel.com/75/75/food"
                  alt="food"
                  className="rounded-full w-24 h-24 shadow-lg"
                />
                <div>
                  <h3 className="text-1xl font-bold">{product.title}</h3>
                  <p className="text-sm text-gray-300">{product.short_desc}</p>
                </div>
                <Quantity
                  quantity={product.quantity}
                  clickDecrement={() => decreaseQuantity(product)}
                  clickIncrement={() => increaseQuantity(product)}
                ></Quantity>
                <p>{`$ ${(product.quantity * product.list_price) / 100}`}</p>
                <button className="bg-white">&larr;</button>
              </div>
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
