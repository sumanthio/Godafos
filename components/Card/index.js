const Card = () => {
  return (
    <div className="flex flex-col justify-stretch text-white p-10 bg-gray-darkb rounded-2xl min-h-full shadow-2xl">
      <div className="text-xl font-semibold pb-4">Card Details</div>
      <div className=" text-gray-400 font-semibold text-sm mt-2">Card Type</div>
      <div className="flex items-center justify-end space-x-12 py-10">
        <div className="absolute px-10 mt-4">
          <div className="relative -left-12 mt-8 rounded-lg bg-gray-card p-8">
            <div className="flex flex-col space-y-6 w-60">
              <div className="flex flex-row">
                <div className="uppercase font-extrabold italic">
                  Master Card
                </div>
              </div>
              <div className="font-light text-sm">
                ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****
              </div>
              <div className="flex flex-row items-stretch justify-between font-semibold font-semibold text-sm">
                <div>Sumanth P</div>
                <div>09/24</div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/mastercard.png"
          className="h-12 w-22 mt-10"
          alt="card type"
        />
      </div>
      <form
        noValidate
        className="mt-12 flex flex-col items-stretch justify-evenly space-y-10"
      >
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="card-name"
            className="text-gray-label text-sm font-semibold"
          >
            Name
          </label>
          <input
            id="card-name"
            type="text"
            className="pr-3 w-70 text-grey-darkest bg-transparent border-b"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="card-number"
            className="text-gray-label text-sm font-semibold"
          >
            Card Number
          </label>
          <input
            id="card-number"
            type="text"
            className="pr-3 w-70 text-grey-darkest bg-transparent border-b"
            placeholder="Card Number"
          />
        </div>
        <div className="flex flex-row items-end space-x-6 justify-between">
          <div className="flex flex-col items-center space-y-2 justify-end">
            <label
              htmlFor="cars"
              className="text-gray-label text-sm font-semibold"
            >
              Expiration date
            </label>
            <div className="flex flex-row space-x-2">
              <select
                name="month"
                id="month"
                placeholder="mm"
                className="bg-transparent"
              >
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">04</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                name="year"
                id="year"
                placeholder="yyyy"
                className="bg-transparent"
              >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="card-cvv"
              className="text-gray-label text-sm font-semibold"
            >
              CVV
            </label>
            <input
              id="card-cvv"
              type="text"
              className="text-grey-darkest bg-transparent border-b border-gray-card"
              placeholder="XXX"
            />
          </div>
        </div>
        <button className="py-4 px-3 bg-blue-600 rounded-md text-white font-semibold">
          Check Out
        </button>
      </form>
    </div>
  );
};

export default Card;
