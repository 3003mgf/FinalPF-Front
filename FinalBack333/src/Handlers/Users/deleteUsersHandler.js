import { deleteUser } from "../../Controllers/Users.controllers.js";

const deleteUsersHandler = async (req, res) => {
  try{
    const { data } = await deleteUser(req.params.id);

    if(data === "No user found"){
      res.status(500).json(data);
    }else{
      res.status(200).json(data);
    }
  }catch(error){
    console.log(error);
  }
}

export default deleteUsersHandler