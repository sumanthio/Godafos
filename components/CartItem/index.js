const CartItem = ({ product }) => {
  return (
    <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:bg-gray-100 focus:text-blue-600">
      <h3 className="text-2xl font-bold">{cartItemData.title}</h3>
      <p className="mt-4 text-xl">{cartItemData.short_desc}</p>
      <Quantity
        quantity={cartItemData.quantity}
        clickDecrement={() => decreaseQuantity(product)}
        clickIncrement={() => increaseQuantity(product)}
      ></Quantity>
      <p>{`$ ${(cartItemData.quantity * cartItemData.list_price) / 100}`}</p>
      <button className="bg-white">&larr;</button>
    </div>
  );
};

export default CartItem;
