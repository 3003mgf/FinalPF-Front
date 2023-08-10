import { getUserOrders, createOrder } from "../../Controllers/Orders.controller.js";


export const getUserOrdersHandler = async(req, res) =>{
  try{
    const {data} = await getUserOrders(req.params.id);

    res.status(200).json(data);
  }catch(error){
    console.log(error);
  }
};


export const createOrderHandler = async(req, res) =>{
  try{
    const {data} = await createOrder(req.body);

    res.status(200).json(data);
  }catch(error){
    console.log(error);
  }
};