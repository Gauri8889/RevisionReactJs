import { useParams } from "react-router-dom";

const AboutCompany=()=>{
    const {compnm}=useParams();
    return(
        <>
        <h1>My Company Name is :{compnm}</h1>
        </>
    )
}
export default AboutCompany;