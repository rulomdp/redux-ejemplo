import { useDispatch, useSelector } from "react-redux"
import { changeEmail } from "../redux/userSlice";


export function Email() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleChange= (e)=>{
    dispatch (changeEmail(e.target.value))
  }
return (
        <input 
          type="email" 
          value={email} 
          placeholder="Email" 
          onChange={handleChange}
        />
        )
}
