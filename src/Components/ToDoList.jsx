// import { useState } from "react"

// function ToDoList() {
//     const [tasks, setTasks] = useState(["Eat Breakfast", "Feed the Dog"]);
//     const [newTask, setNewTask] = useState("");

//     function handleInputchanges(event) {
//         setNewTask(event.target.value);
//     }

//     function AddTask(event) {
//         if (newTask !== "") {
//             setTasks(t => [...t, newTask])
//             setNewTask("")
//         }
//     }

//     function RemoveTask(index) {
//         const updatedTask = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTask)
//     }

//     function MoveTaskUp(index) {
//         if (index > 0) {
//             const updatedTasks = [...tasks];
//             [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
//             setTasks(updatedTasks);
//         }
//     }

//     function MoveTaskDown(index) {
//         if (index < tasks.length - 1) {
//             const updatedTasks = [...tasks];
//             [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
//             setTasks(updatedTasks);
//         }
//     }

//     return (
//         <>
//             <p>To Do List</p>
//             <input type="text" placeholder="Enter Your Task..." onChange={(event) => handleInputchanges(event)} />
//             <button onClick={() => AddTask(event)}>Add Task</button>
//             <ol>
//                 {tasks.map((task, index) => <li key={index}>
//                     <span>{task}</span>
//                     <button onClick={() => RemoveTask(index)}>Delete</button>
//                     <button onClick={() => MoveTaskUp(index)}>⬆️</button>
//                     <button onClick={() => MoveTaskDown(index)}>⬇️</button>
//                 </li>)}
//             </ol>
//         </>
//     )
// }
// export default ToDoList