const Quantity = (props) => {
  return (
    <div className="flex flex-row">
      <button onClick={props.clickDecrement}>-</button>
      <div className="bg-gray-100 border-gray-100 w-10 h-5 text-center align-middle">
        {props.quantity}
      </div>
      <button onClick={props.clickIncrement}>+</button>
    </div>
  );
};

export default Quantity;
