// // use state is a hook that allows you to create stateful variaable with the help of which you can make changes in virtual DOM
// // hook are special function that allows you to use functional comp without writting classes
// import { useState } from 'react'
// function UseStateHook() {
//     // const [name, setName] = useState();
//     // const UpdateName = () => (false) ? setName("sandeep") : setName("hello");
//     const [count, setCount] = useState(0);
//     const decrement = () => setCount(count - 1);
//     const reset = () => setCount(0);
//     const increment = () => setCount(count + 1);
//     return (
//         <div>
//             {/* <p>hello {name}</p> */}
//             {/* <button onClick={UpdateName}>Click Me</button> */}
//             <p style={{ textAlign: 'center' }}>{count}</p>
//             <div className=' d-prop'>
//                 <button onClick={decrement}>Decrement</button>
//                 <button onClick={reset}>Reset</button>
//                 <button onClick={increment}>Increment</button>
//             </div>
//         </div>
//     )
// }

// export default UseStateHook