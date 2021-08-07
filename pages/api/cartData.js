// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const cartDataFromDB = [
  {
    uuid: "1",
    title: "Chicken Biryani",
    short_desc: "Short desc",
    long_desc: "Long desc",
    quantity: 1,
    list_price: 4350,
  },
  {
    uuid: "2",
    title: "Kalmi Kebab",
    short_desc: "Short desc",
    long_desc: "Long desc",
    quantity: 1,
    list_price: 2990,
  },
  {
    uuid: "3",
    title: "Apollo Fish",
    short_desc: "Short desc",
    long_desc: "Long desc",
    quantity: 1,
    list_price: 3799,
  },
];

export default function getCartData(req, res) {
  // mimicking a DB's result-set
  if (req.method === "GET") {
    {
      res.status(200).json(cartDataFromDB);
    }
  }

  // splice the array and update db
  if (req.method === "DELETE") {
    {
      res.status(200).json(cartDataFromDB);
    }
  }
}
