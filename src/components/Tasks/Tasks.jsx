import { useContext } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import { TaskStateContext } from "../../context/TaskContext";
const Tasks = () => {
  // loading the context
  const { tasks } = useContext(TaskStateContext);
  const numberOfTasks = tasks.length;
  const CompletedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <section className={styles.tasks}>
      {/* mini-header*/}
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{numberOfTasks}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>

          <span>
            {CompletedTasks} of {numberOfTasks}
          </span>
        </div>
      </header>
      {/* list of tasks */}
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
