import { userCreate } from "../../Controllers/Users.controllers.js";


export const createUserHandler = async(req, res) =>{
  try{
    const { data } = await userCreate(req.body);

    if(data === "Email Error" || data === "UserName Error"){
      return res.status(401).json(data);
    }else{
      return res.status(200).json(data);
    }

  }catch(error){
    console.log(error);
  }
}