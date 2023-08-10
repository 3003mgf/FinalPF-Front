import { userLogin } from "../../Controllers/Users.controllers.js";


export const loginUserHandler = async(req, res) =>{

  try {   
    
    const { data } = await userLogin(req.body);

     if(data === "Email or Username Incorrect" || data === "Password Incorrect"){
      return res.status(401).json(data);

    }else{

      return res.status(200).json(data);
    } 

  }catch(error){
    console.log(error);
  } 
}