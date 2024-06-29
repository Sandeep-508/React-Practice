// import React, { useState } from 'react'

// function UseStateInArrayOfObject() {
//     const [cars, setCars] = useState([]);
//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState("");
//     const [carModel, setCarModel] = useState("");

//     function handleAddCar() {
//         const newCars = {
//             year: carYear,
//             name: carMake,
//             model: carModel,
//         }

//         setCars(cars => [...cars, newCars]);

//         setCarYear(new Date().getFullYear());
//     }

//     function handleRemoveCar(index) {
//         setCars(c => c.filter((_, i) => i !== index));
//     }

//     function handleCarYear(event) {
//         setCarYear(event.target.value);
//     }

//     function handleCarMake(event) {
//         setCarMake(event.target.value);
//     }

//     function handleCarModel(event) {
//         setCarModel(event.target.value);
//     }

//     return (
//         <div>
//             <p style={{ fontSize: '36px' }}>List of car Objects</p> <br />
//             <ul>
//                 {cars.map((car, index) =>
//                     <li key={index} onClick={() => handleRemoveCar(index)}>
//                         {car.year} {car.name} {car.model}
//                     </li>
//                 )}
//             </ul>
//             <br />
//             <input type="number" placeholder='enter the year of the car' onChange={(event) => handleCarYear(event)} /><br /><br />
//             <input type="text" placeholder='Enter the maker of the car' onChange={(event) => handleCarMake(event)} /><br /><br />
//             <input type="text" placeholder='Enter the model of the car' onChange={(event) => handleCarModel(event)} /><br /><br />
//             <button onClick={handleAddCar}>Add Car</button>
//         </div>
//     )
// }

// export default UseStateInArrayOfObject
