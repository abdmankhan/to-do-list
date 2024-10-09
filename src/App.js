import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div className="">
      <AddTask setTasks={setTasks} tasks={tasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

function AddTask({ setTasks, tasks }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  function handleClick() {
    const taskInfo = [taskName, taskDate];
    if (taskInfo[0] === "" || taskInfo[1] === "") return;
    setTasks([...tasks, taskInfo]);
    setTaskName("");
    setTaskDate("");
  }
  return (
    <div className="flex justify-center place-items-center">
      <input
        type="text"
        placeholder="Enter task name"
        title="Enter task name"
        name="task"
        value={taskName}
        className="px-3 py-3 mx-5 my-5 border-cyan-400 border rounded-2xl font-serif font-bold "
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        title="Choose Date"
        name="date"
        value={taskDate}
        className="px-3 py-3 mx-5 my-5 border-cyan-400 border rounded-2xl font-serif font-bold "
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <button
        onClick={() => handleClick()}
        className="border text-pretty text-lg px-3 py-3 bg-blue-900 text-white font-extrabold rounded-md hover:bg-white hover:text-blue-900 hover:border-blue-900"
      >
        Add Task
      </button>
    </div>
  );
}

function ListTasks({ tasks, setTasks }) {
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function myfun() {
    return tasks.map((element, index) => (
      <div>
        <li key={index}>
          {element[0]} - {element[1]}{" "}
          <button
            key={index}
            className="border border-blue-800 bg-red-300 font-bold"
            onClick={() => deleteTask(index)}
          >
            Delete Task
          </button>
        </li>
      </div>
    ));
  }

  return (
    <div>
      <ol className="list-decimal list-inside">{myfun()}</ol>
    </div>
  );
}

export default App;
