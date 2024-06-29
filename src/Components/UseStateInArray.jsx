// import React, { useState } from 'react'

// function UseStateInArray() {
//     const [foods, setfoods] = useState(["apple", "banana", "Cherry"]);

//     function handleAddChanges() {
//         let newFood = document.getElementById("newfood").value;
//         if (newFood) {
//             setfoods(f => [...f, newFood]);
//             document.getElementById("newfood").value = "";
//         }
//     }
//     function handleRemoveChanges(index) {
//         setfoods(foods.filter((_, i) => i !== index));
//         // we uses _ in prama when we have to ingnore what's in the param
//     }
//     return (
//         <div>
//             <ul>
//                 {foods.map((food, index) => <li key={index} onClick={() => handleRemoveChanges(index)}>{food}</li>)}
//             </ul><br />
//             <input type="text" placeholder='Enter the name of the fruit' id='newfood' />
//             <button onClick={handleAddChanges}>Add</button>
//         </div>
//     )
// }

// export default UseStateInArray
