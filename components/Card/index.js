const Card = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="text-xl">Card Details</div>
      <div>Card Type</div>
      <div className=" flex">
        <div className="relative h-45 w-25 rounded-lg bg-gray-400"> test </div>
        <img src="http://lorempixel.com/150/175" alt="" />
      </div>

      <form noValidate>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="CVV" />
        <button className="py-6 px-3 bg-blue-600 rounded-md text-white">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Card;
