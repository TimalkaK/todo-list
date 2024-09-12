import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    "Go to the gym",
    "Eat more fruits and veg",
    "Pick up the kids from school",
  ];
  return (
    <>
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
