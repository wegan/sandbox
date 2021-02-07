// import logo from './logo.svg';
import './App.css';

function Main(props) {
  return (
    <section>
      <h2>Here is {props.name}'s Menu:</h2>
      {/* Initial implementation */}
      {/* {props.menu.map((dish) => <p>{dish}</p>)} */}

      {/* Hacky JavaScript implemenation by Eve. Not recommended by React */}
      {/* {props.menu.map((dish, i) => <p key={i}>{dish}</p>)} */}

      {/* Adjust dish arry to return object not string */}
      {/* Map over array of objects and write a paragraph element for each one */}
      {props.menu.map((dishObjects) => <p key={dishObjects.id}>{dishObjects.title}</p>)}




    </section>
  );
}

function Footer(props) {
  return (


    <section><p>Copyright {props.year}</p>
    
    {/* <img src={logo} style="width:500px;height:600px;"></img> */}

    {/* <img src={logo} height={200} width={200} alt={"This is the React icon"}></img> */}

    <img src="https://avatars.githubusercontent.com/u/1349145" height={100} width={100} alt={"This is the React icon"}></img>

    </section>
    
  );
}

const dishes = [
  "Macraroni and cheese",
  "Salmon",
  "Tofu and veg",
  "Bacon and cabbage",
  "Corn Beef"
]
// dishes.map((dish) => console.log(dish))
// Write a transformation function that maps over dishes and returns an object
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))
console.log(dishObjects)

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
      <Main name="Tuesday" menu={dishObjects} />
      <Footer year={new Date().getFullYear()} />
      {/* <Secondary /> */}
    </div>
  );
}

export default App;
