import { forgotPassword } from "../../Controllers/Users.controllers.js";

export const forgotPHandler = async(req, res)=>{
  try{
    const {data} = await forgotPassword(req.body.email);
  
    if(data === "No user found"){
      res.status(500).json(data);
    }else{
      res.status(200).json(data);
    }
  }catch(error){
    console.log(error);
  }
};