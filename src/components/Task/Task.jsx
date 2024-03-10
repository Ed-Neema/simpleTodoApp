import { useContext } from "react";
import styles from "./task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import { TaskStateContext } from "../../context/TaskContext";

const Task = ({ task }) => {
    const {toggleTaskCompletedById, deleteTaskById} = useContext(TaskStateContext);
  return (
    <div className={styles.task}>
      <div className={styles.miniContainer}>
        <button
          className={styles.checkContainer}
          onClick={() => toggleTaskCompletedById(task.id)}
        >
          {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>

        <div className={styles.taskbody}>
          <h5 className={task.isCompleted ? styles.textCompleted : ""}>
            {task.title}
          </h5>
          <p className={task.isCompleted ? styles.textCompleted : ""}>
            {task.description}
          </p>
        </div>
      </div>
      {/* action */}
      <button
        className={styles.deleteButton}
        onClick={() => deleteTaskById(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default Task;
