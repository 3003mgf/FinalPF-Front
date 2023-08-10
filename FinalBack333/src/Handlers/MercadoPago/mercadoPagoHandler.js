import mercadopago from "mercadopago";

// Configure MercadoPago
mercadopago.configure({
  access_token:
    "TEST-5560570626097728-072022-b846d996aec1526cb840190799711653-307905530",
});

// Route for creating payment preferences
export const postMercadoPago = (req, res) => {
  let getItems = req.body.items;

  

  let preference = {
    items: getItems,

    // Back URLs will redirect the user after the payment process.
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/error",
      pending: "http://localhost:3000/home",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      // Use response directly as an argument
      res.json({
        id: response.body.id, // Access response.body.id directly
      });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the preference." });
    });
};
