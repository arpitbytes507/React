import React , {useState,useContext} from "react";
import UserContext from "../Context/UserContext";

function Card() {
  const {user} = useContext(UserContext);
  if(!user) return <div>Please Login</div>
  return <div>Welcome {user.inputValue}</div>
}

export default Card;
