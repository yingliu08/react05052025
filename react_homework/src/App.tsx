import "./App.css";
import DebouncedCallback from "./day17_performance/DebouncedCallback";
import BirthdayRecord from "./day17_performance/birthday_record/BirthdayRecord";
import ClassNote from "./day17_performance/notes/ClassNote";
import ParentComponent from "./day17_performance/notes/ParentComponent";
import UseMemoExample from "./day17_performance/notes/UseMemoExample";
// import SelectAllFormSolution from "./many_practices/SelectAllForm/solution";
// import TodoApp from "./day18_todoApp";
// import ReduxTodoSolution from "./ReduxTodoSolution";
// import Day22Play from "./day22_testing";
// import TodoListApp from "./day12_interactivity/TodoListApp/index.tsx";
// import Checkbox from "./day12_interactivity/ControlledComponents/Checkbox.tsx";
// import Select from "./day12_interactivity/ControlledComponents/Select.tsx";
// import RadioGroup from "./day12_interactivity/ControlledComponents/RadioGroup.tsx";
// import LoginForm from "./day16_pattern/ref/LoginForm.tsx";
// import AutoFocusInput from "./day16_pattern/ref/AutoFocusInput.tsx";
// import FetchPosts from "./day16_pattern/customHook/fetch/FetchPosts.tsx";
// import Debounce from "./day16_pattern/customHook/debounce/Debounce.tsx";
// import Toggle from "./day16_pattern/notes/Toggle.tsx";

function App() {
  return <ClassNote />;
  return (
    <>
      <ClassNote />
      <DebouncedCallback />
      <BirthdayRecord />
      <ParentComponent />
      <UseMemoExample />
      {/* <TodoApp /> */
      /* <ReduxTodoSolution /> */
      /* <Toggle />
      <Debounce />
      <AutoFocusInput />
      <FetchPosts />
      <LoginForm />
      <RadioGroup />
      <Checkbox />
      <Select />
      <TodoListApp />
      <Day22Play /> */}
    </>
  );
}

export default App;
