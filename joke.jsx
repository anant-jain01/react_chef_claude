// // import React from "react"
// // export default function Joke(props) {
// //   /**
// //    * Challenge:
// //    * - Create state `isShown` (boolean, default to `false`)
// //    * - Add a button that toggles the value back and forth
// //    */
// //   const [isShown,setisShown]=React.useState(false);
// //   console.log(isShown)
// //   function func(){
// //     setisShown((prev)=>!prev)
// //   }
// //   return (
// //       <div>
// //           {props.setup && <h3>{props.setup}</h3>}
// //           {isShown&&<p>{props.punchline}</p>}
// //           <button onClick={func}>Show or Hide</button>
// //           <hr />
// //       </div>
// //   )
// // }
// // // export default function App() {
// // //     const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])

// // //     /**
// // //      * Challenge:
// // //      * Only display the <h1> below if there are unread messages
// // //      */

// // //     return (
// // //         <div>
// // //             {unreadMessages.length>0 &&<h1>You have {unreadMessages.length} unread messages!</h1>}
// // //         </div>
// // //     )
// // // }
// import React from "react";
// export default function Joke() {
//   const [messages, setMessages] = React.useState(["a", "b"]);
//   return (
//     <div>
//       {messages.length === 0 ? (
//         <h1>All caught up</h1>
//       ) : messages.length === 1 ? (
//         <h1>1</h1>
//       ) : (
//         <h1>{messages.length}</h1>
//       )}
//     </div>
//   );
// }
