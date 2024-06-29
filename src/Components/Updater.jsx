// // updater function safe updates based on the previous state
// // we will be using the updater fucntion when the next value is depeneding over the previous value


// import { useState } from 'react'
// function Updater() {
//     const [count, SetCount] = useState(0);
//     function decrement() {
//         SetCount(c => c - 1);
//         SetCount(c => c - 1);
//     }
//     function increment() {
//         SetCount(c => c + 1);
//         SetCount(c => c + 4);
//     }
//     function reset() {
//         SetCount(0);
//     }

//     return (
//         <>
//             <p>{count}</p>
//             <button onClick={decrement}>decrement</button>
//             <button onClick={reset}>reset</button>
//             <button onClick={increment}>increment</button>
//         </>
//     )
// }

// export default Updater;