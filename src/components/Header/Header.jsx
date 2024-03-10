import styles from "./header.module.css";
import Logo from "../../assets/logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import { TaskStateContext } from "../../context/TaskContext";

const Header = () => {
  // getting the context
  const { addTask } = useContext(TaskStateContext);
  // state for title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // functions to handle changes in input text
  function handleTitleChange(event){
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event){
    setDescription(event.target.value);
  }
  // handling form submit
  function handleSubmit(event){
    event.preventDefault();
    addTask(title, description);
    setTitle('');
    setDescription('');
  }
 
  return (
    <header className={styles.header}>
      <img src={Logo} />
      {/* form */}
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder="Title" type="text" value={title} onChange={handleTitleChange}/>
        <input placeholder="Description" type="text" value={description} onChange={handleDescriptionChange}/>
        <button type="submit">
          <AiOutlinePlusCircle size={20} /> Create
        </button>
      </form>
    </header>
  );
};

export default Header;
