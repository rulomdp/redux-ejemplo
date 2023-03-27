import { Header } from "./components/header";
import { Email } from "./components/email";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect (() =>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then((data )=> dispatch(addUser(data)))
    .catch((err) => console.log(err));
  },[])

  return (
    <div className="App">
      <Header />
      <Email />
    </div>
  );
}

export default App;