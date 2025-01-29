import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";

const App=()=>{
  const ans=useSelector(state=>state.myslice.count);
  const dispatch=useDispatch();
  return(
    <>
    <h1>welcome to counter App</h1>
    <button onClick={()=>{dispatch(increment())}}>increment</button>
    <h1>{ans}</h1>
    <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    </>
  )
}
export default App;