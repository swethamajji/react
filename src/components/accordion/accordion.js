

// import Accordion from 'react-bootstrap/Accordion';
// import List from '../list/list';
// import ImageComponent from '../image/image';
// import Modals from '../Modals/Modal';
// import { Collapse } from 'react-bootstrap';

// function AccordionComponent() {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum. */}
          

//           {
//             [
//                 {name:"RCB"},{name:"KKR"},{name:"RCB"},{name:"KKR"}
//             ].map(eachTeam=>{
//                 return(
//                     <>
//           <ImageComponent/>
//           <List/>
//                     </>
//                 )
//             })
//           }
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
  

//         <table>
//           <tr>
//             <td>Ipl Teams</td>
//             <td>TeamPlayers</td>
//           </tr>
//         </table>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }

// export default AccordionComponent;

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent() {
  let playerNames1 = [
    { name: "Ruturaj Gaikwad" },
    { name: "Devon Conway" },
    { name: "MS Dhoni" },
    { name: "Ajinkya Rahane" },
    { name: "Shaik Rasheed" },];

let playerNames2 = [
    {name:"Faf du Plessis"}, 
    {name:"Rajat Patidar"}, {name:"Virat Kohli"},
    { name:"Anuj Rawat"},
     {name:"Dinesh Karthik"}]
return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Team CSK </Accordion.Header>
        <Accordion.Body>
          {playerNames1.map((player, index) => {
            return (
              <h3>{player.name}</h3>
            );
          })}

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Team RCB </Accordion.Header>
        <Accordion.Body>
          {playerNames2.map((player, index) => {
            return (
              <h3>{player.name}</h3>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent