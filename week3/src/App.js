import "./App.css";
import MyCom from "./MyCom";
import ShowHideText from "./ShowHideText";
import ArrayPractice from "./ArrayPractice";
import Blog from "./Blog";
import ObjectPractice from "./ObjectPractice";

const cars = [
  { id: 1, year: 2022, name: "honda", model: "corana" },
  { id: 2, year: 2022, name: "nissan", model: "corana1" },
  { id: 3, year: 2021, name: "honda", model: "corana2" },
  { id: 4, year: 2024, name: "honda2", model: "corana" },
];

function App() {
  return (
    <div className="App">
      <Car />
      {/* <Car
        name="toyota"
        year={2023}
        model="corolla"
        owner={{ id: 1, name: "bob" }}
      /> */}
      <Blog />
      <ObjectPractice />
      <ArrayPractice />
      <ShowHideText />
      <MyCom />
    </div>
  );
}
function Car(props) {
  // const { name, year, model, owner } = props;
  return (
    <div>
      {/* <div style={{ color: "green" }}>name:{name}</div>
      <div>year:{year}</div>
      <div>model: {model}</div>
      <div>{owner.id}</div>
      <div>{owner.name}</div> */}

      <ul>
        {cars.map((car) => {
          const { id, name, year, model } = car;
          return (
            <li key={id}>
              {name} {year} {model}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
