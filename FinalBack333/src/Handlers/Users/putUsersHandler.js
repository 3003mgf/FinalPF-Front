import { updateUser } from "../../Controllers/Users.controllers.js";


const putUsersHandler = async (req, res) => {
  try{
    const {data} = await updateUser(req.body);

    if(data === "No user found"){
      res.status(500).json(data)
    }else{
      res.status(200).json(data);
    }
  }catch(error){
    console.log(error);
  }
}

export default putUsersHandler