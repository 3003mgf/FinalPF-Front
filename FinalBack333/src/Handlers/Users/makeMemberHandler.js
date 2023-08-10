import { makeMember } from "../../Controllers/Users.controllers.js";

export const makeMemberHandler = async(req, res) =>{
  try{
    const {data} = await makeMember(req.body);

    if(data === "User not found"){
      res.status(500).json(data);
    }else{
      res.status(200).json(data);
    }
  }catch(error){
    console.log(error);
  }
};