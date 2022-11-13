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

  function deleteTaskbyId(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskbyId}
      />
    </div>
  )
}

export default App
