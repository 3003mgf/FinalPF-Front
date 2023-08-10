import { getUsersById } from "../../Controllers/Users.controllers.js";


const getUsersByIdHandler = async (req, res) => {
  try{
    
    const getUser = await getUsersById(req.params.id);
    
    return res.status(200).json(getUser);
  }catch(error){
    console.log(error);
  }
}

export default getUsersByIdHandler