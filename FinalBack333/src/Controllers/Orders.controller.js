import Orders from "../Models/Orders.js";
import Users from "../Models/Users.js";
import { ordersRouter } from "../Routes/orders.routes.js";


export const getUserOrders = async(userId) =>{
  const getOrders = await Orders.findAll({
    where:{
      userId
    }
  });

  if(!getOrders.length){
    return {data: "Orders empty"}
  };

  return {data: getOrders};
};

export const createOrder = async(order) =>{
  
  const createOrder = await Orders.create({
    userId: order.order.userId,
    items: order.order.items,
    orderId: order.order.orderId,
    date: order.order.date,
    shippingAddress: order.order.shippingAddress,
    billingAddress: order.order.billingAddress,
    shippingMethod: order.order.shippingMethod,
    totalPrice: order.order.totalPrice,
    contactEmail: order.order.contactEmail
  });

  const findUser = await Users.findOne({
    where:{
      id: order.order.userId
    }
  });

  findUser.update({
    cart: []
  });

  findUser.save();

 
  return {data: createOrder.dataValues};
};