// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import UserForm from './UserForm';
import ChatForm from './ChatForm';

function App() {
    // return (
    //     <div className="App">
    //         <h1>User Form</h1>
    //         <UserForm />
    //     </div>
    // );
    return (
        <div className="App">
            <h1>Chat Form</h1>
            <ChatForm />
        </div>
    );
}

export default App;
