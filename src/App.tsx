import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Tasks } from "./Components/Tasks/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskTitle: string) {
    setTasks([...tasks,
    {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }])
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
