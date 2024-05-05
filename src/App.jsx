import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Navbar from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Footer from "./components/Footer";


function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setshowCompleted] = useState(true)

  useEffect(() => {
    let taskString = localStorage.getItem("tasks")
    if(taskString){
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    setTasks(tasks)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  const toggleCompleted = (e) => {
    setshowCompleted(!showCompleted)        
  }
  

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    setTasks([...tasks, {id:uuidv4(), task, isCompleted: false }]);
    setTask("");
    saveToLS()
  };

  const handleCheckbox = (e)=> {
    let id = e.target.name;
    let index = tasks.findIndex(item=>{
      return item.id === id;
    })
    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks)
    saveToLS()
  }

  const handleEdit = (e, id) => {
    let T = tasks.filter(i=>i.id === id)
    setTask(T[0].task)
    let newTasks = tasks.filter(item=>{
      return item.id!== id
    })
    setTasks(newTasks)
    saveToLS()
  };

  const handleDelete = (e, id) => {
    let newTasks = tasks.filter(item=>{
      return item.id!== id
    })
    setTasks(newTasks)
    saveToLS()
  };
  

  return (
    <>
      <Navbar />
      <div className="md:container my-4 mx-auto md:w-[70%] p-5 bg-slate-200 min-h-[80vh] rounded-xl ">
        <div className="intro flex justify-center phone:text-base tablet:text-xl font-bold my-4">React to Productivity: Your Tasks, Your Way!</div>
        <div className="addTodo my-4">
          <h2 className="phone:text-base tablet:text-lg font-bold my-2">Add Your Task</h2>
          <input onChange={handleChange} value={task} type="text" placeholder="Add Your Task Here...." className="w-full px-2 py-1 rounded-md"/>
          <button onClick={handleAdd} disabled={task.length<=3} className="bg-slate-700 disabled:bg-slate-500 text-white text-sm my-4 font-bold w-full rounded-md py-[6px] px-8 hover:bg-slate-950 transition-all duration-200">
            Save</button>
        </div>
        <div className="my-4 completed flex gap-4">
          <input onChange={toggleCompleted} type="checkbox" checked={showCompleted}/>
          <span className="text-lg font-semibold">Show Completed</span>
        </div>
        <hr className="bg-slate-500 my-2 h-[1px] "/>
        <h2 className="text-lg font-bold my-2">Your Task</h2>
        <div className="tasks phone:w-full desktop:w-3/4">
          {tasks.length=== 0 && <div className="m-5">No Tasks to display</div> }
          {tasks.map(item => {
            return (showCompleted || !item.isCompleted) && <div key={item.id} className="my-2 flex justify-between phone:text-base desktop:text-lg font-semibold mr-2">
              <div className="flex phone:gap-2 tablet:gap-4 phone:w-[70%]"> 
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id}/>
                <div className={item.isCompleted?"line-through":""}>{item.task}</div>
              </div>
                <div className="tablet:flex buttons phone:w-30%">
                  <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-slate-700 text-white text-sm font-bold phone:mx-1 tablet:mx-2 rounded-md phone:px-3 py-2 tablet:px-6 hover:bg-slate-950 transition-all duration-200">
                  <FaEdit/></button>
                  <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-slate-700 text-white text-sm font-bold phone:mx-1 tablet:mx-2 rounded-md phone:px-3 py-2 tablet:px-6 hover:bg-slate-950 transition-all duration-200">
                    <MdDelete/></button>
                </div>
              </div>
            })}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
