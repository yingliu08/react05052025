import "./App.css";
import MyCom from "./MyCom";
import ShowHideText from "./ShowHideText";
import ArrayPractice from "./ArrayPractice";
import Blog from "./Blog";
import ObjectPractice from "./ObjectPractice";
import Cars from "./Cars";
import usersJSON from "./Users";
import ArrayOfObject from "./ArrayOfObject";
import Recipes from "./Recipes";
function App() {
  const { users } = usersJSON;
  return (
    <div className="App">
      <Recipes />
      <ul>
        {users
          .filter(({ age }) => age < 30)
          .map((user) => {
            return (
              <li key={user.id}>
                <UserInfo user={user} />
              </li>
            );
          })}
      </ul>

      <ArrayOfObject />
      <Cars />
      <Blog />
      <ObjectPractice />
      <ArrayPractice />
      <ShowHideText />
      <MyCom />
    </div>
  );
}
function UserInfo({ user }) {
  const { firstName, lastName, hair, age, gender } = user;
  return (
    <>
      <div>
        {firstName} {lastName}
        {age}
      </div>
      <div style={{ color: gender === "female" ? "pink" : "blue" }}>
        {gender === "female" ? "women" : "man"}
      </div>
      <div>
        {hair.color} {hair.type}
      </div>
    </>
  );
}

export default App;
