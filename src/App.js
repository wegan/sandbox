import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <section><h1>Hello World!</h1></section>
  );
}

function Main(props) {
  console.log(props);
  return (
    <section>
      <p>This is my second React component</p>
      <p>Here is {props.name}'s Menu:</p>

      <ul style={{ textAlign: "center" }}>
        {props.dishes.map((dish) => <li>{dish}</li>)}
      </ul>


    </section>
  );
}




function Footer(props) {
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
// dishes.map((dish) => console.log(dish))

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

function Secondary(props) {
  return (
    
    <section>
      
    <p>This is secondary component</p>
    <ul>{listItems}</ul>

    </section>
  );
}


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Main name="Walter" dishes={dishes} /> */}
      {/* <Footer year={new Date().getFullYear()} /> */}
      <Secondary />
    </div>
  );
}


export default App;
