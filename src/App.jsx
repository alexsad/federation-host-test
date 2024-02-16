// import TaskList from "taskList/TaskList";
// import useTaskSelected from "taskList/Task";
import "./App.css";
import OdontoApp from "odontoApp/OdontoApp";

/*

function App() {
  const [task] = useTaskSelected();

  return (
    <>
      <h3 style={{ color: "#1e3a8a", fontSize: "20px" }}>
        Created using Vite + vite-plugin-federation
      </h3>
      <TaskList />
      {task && (
        <div className="container">
          <h1 style={{ color: "#1e3a8a" }}>Selected Task:</h1>
          <div className="task-card-container">
            <img
              src={task?.sprite}
              className="task-image"
              aria-label="Image of Task Selected"
            />
            <label className="task-name">{task?.name}</label>
          </div>
        </div>
      )}
    </>
  );
}

*/

const App = () => {
  return (
    <>
      <OdontoApp />
      {/* <TaskList /> */}
    </>
  )
}

export default App;