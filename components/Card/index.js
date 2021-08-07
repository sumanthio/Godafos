const Card = () => {
  return (
    <div className="flex flex-col justify-stretch text-white p-8 bg-gray-darkb rounded-lg min-h-full">
      <div className="text-xl font-semibold pb-4">Card Details</div>
      <div className=" text-gray-400 text-sm">Card Type</div>
      <div className="flex items-center justify-end space-x-10 py-4">
        <div className="absolute px-6">
          <div className="relative -left-16 w-60 mt-8 rounded-lg bg-gray-card p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row">
                <div className="uppercase font-extrabold italic">
                  Master Card
                </div>
                {/* <div>Master Card</div> */}
              </div>
              <div>****&nbsp;****&nbsp;****&nbsp;****</div>
              <div className="flex flex-row items-center font-semibold">
                <div>Sumanth P</div>
                <div>09/24</div>
              </div>
            </div>
          </div>
        </div>
        <img src="/mastercard.png" className="h-12 w-22" alt="card type" />
      </div>

      <form
        noValidate
        className="mt-12 flex flex-col items-stretch justify-evenly py-12 space-y-5"
      >
        <input
          type="text"
          className="px-3 text-grey-darkest bg-transparent border-b"
          placeholder="name"
        />
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="CVV" />
        <button className="py-3 px-3 bg-blue-600 rounded-md text-white font-medium">
          Check Out
        </button>
      </form>
    </div>
  );
};

export default Card;
