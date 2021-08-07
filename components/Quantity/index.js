const Quantity = (props) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <button className="p-2" onClick={props.clickDecrement}>
        -
      </button>
      <div className="bg-gray-100 w-12 border-gray-800 max-w-12 h-6 text-center">
        {props.quantity}
      </div>
      <button className="p-2" onClick={props.clickIncrement}>
        +
      </button>
    </div>
  );
};

export default Quantity;
