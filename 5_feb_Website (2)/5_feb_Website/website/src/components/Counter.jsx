import Pagination from 'react-bootstrap/Pagination';
const Counter =()=>{
    return(
        <>
        <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"30px",marginBottom:"30px"}}>
        <Pagination >
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />
  
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item >{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>
  
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      </div>
      </>
    )
}
export default Counter;