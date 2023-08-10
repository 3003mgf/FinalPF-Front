import { googleAuth } from "../../Controllers/Users.controllers.js";


export const googleAuthHandler = async(req, res) =>{
  try{
    const { data } = await googleAuth(req.body);

    return res.status(200).json(data);

  }catch(error){
    console.log(error);
  }
}


// claro claaaaa