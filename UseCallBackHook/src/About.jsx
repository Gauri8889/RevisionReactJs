import { useNavigate } from "react-router-dom";
const About=()=>{
  const navigate=useNavigate();
  const cname="Cybrom";

  const goAboutCompany=()=>{
    navigate(`/abtcompany/${cname}`)
  }
    return(
      <>
      <h1>About Company!</h1>
      <button onClick={goAboutCompany}>About Cmp</button>
      </>
    )
  }
  export default About;