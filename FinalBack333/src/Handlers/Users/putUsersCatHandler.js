

import { userCart } from "../../Controllers/Users.controllers.js";

export const putUserCartHandler = async (req, res) => {

  
  try {
    const { data } = await userCart(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
