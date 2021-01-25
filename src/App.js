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
      <p>Here is {props.name}'s Menu:</p>
      
      <ul style={{ textAlign: "center"}}>
        {props.dishes.map((dish) => <li>{dish}</li>)}
      </ul>


    </section>
  );
}

function Footer (props) {
  return (
    <section><p>Copyright {props.year}</p></section>
  );
}

const dishes = [

    "Macraroni and cheese",
    "Salmon",
    "Tofu and veg",
    "Bacon and cabbage"

]

dishes.map((dish) => console.log(dish))


// Main function supports the name property (props)
function App() {
  return (
    <div className="App">
      <Header />
      <Main name="Walter" dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}


export default App;
