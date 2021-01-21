// import logo from './logo.svg';
import './App.css';



    function Header(){
      return (

        <section><h1>Hello World!</h1></section>
        

      );


    }

    function Main (){
      return (
        <section><p>This is my second React component</p></section>
        

      );
      

    }

    
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>

    </div>
  );
}


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

export default App;
