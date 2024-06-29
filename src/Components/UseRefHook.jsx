// // use state re-renders the element whenever it changes the state but in case of useRef it doesn't re-render the element whenever the state changes

// import { useEffect, useRef } from "react"

// function UseRefHook() {
//     let ref = useRef(0);
//     console.log(ref.current);

//     useEffect(() => {
//         console.log("component Rendered")
//     })

//     function handleClick() {
//         ref.current++;
//         console.log(ref.current)
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }
// export default UseRefHook