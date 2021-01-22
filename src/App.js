// import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <section><h1>Hello World!</h1></section>
  );
}

// pass in props
function Main(props) {
  console.log(props);
  return (
    <section>
      <p>This is my second React component</p>
      <p>My name is {props.name}!</p>
    </section>
  );
}

function Footer (props) {
  return (
    <section><p>Copyright {props.year}</p></section>
  );
}


// Main function supports the name property (props)
function App() {
  return (
    <div className="App">
      <Header />
      <Main name="Walter" />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}


export default App;
