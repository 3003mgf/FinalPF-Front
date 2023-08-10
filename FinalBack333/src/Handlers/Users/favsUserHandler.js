import { userFavs } from "../../Controllers/Users.controllers.js";

export const favsUserHandler = async(req, res) =>{

  try {   
    
    const { data } = await userFavs(req.body);

    
    res.status(200).json(data);

  }catch(error){
    console.log(error);
  } 
}