import Header from "./header/header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"



// Implementation du composant que nous utiliserons pour afficher l'integralite de notre contenu
const TaskContainer = () => {
  return (
    <main>
      <Header />
      <TaskInput />
      <TaskList />
    </main>
  )
}

export default TaskContainer
