// import "./table.css"
// const Table=()=>{
//     return(
//         <table>
//             <tr>
//                 <td>S.no</td>
//                 <td>Name</td>
//                 <td>Marks</td>
//             </tr>
//             <tr>
//                 <td>1</td>
//                 <td>Swetha</td>
//                 <td>90</td>
//             </tr>
//             <tr>
//                 <td>2</td>
//                 <td>Akhi</td>
//                 <td>80</td>
//             </tr>
//             <tr>
//                 <td>3</td>
//                 <td>Archana</td>
//                 <td>75</td>
//             </tr>
//             <tr>
//                 <td>4</td>
//                 <td>Reshma</td>
//                 <td>85</td>
//             </tr>
//         </table>
//     )
// }
// export default Table



import Table from 'react-bootstrap/Table';

function TableExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableExample;