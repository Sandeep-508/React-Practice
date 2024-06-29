// import { useState } from "react"

// function StateInObject() {
//     const [Student, setStudent] = useState({
//         name: "sandeep",
//         age: 18,
//         isEducated: true,
//     });

//     function NameChange() {
//         setStudent(n => ({ ...n, name: "Ankit" }));
//     }
//     function AgeChange() {
//         setStudent(a => ({ ...a, age: 20 }));
//     }
//     function EducatedChange() {
//         setStudent(e => ({ ...e, isEducated: false }));
//     }

//     return (
//         <>
//             <p style={{ textAlign: 'center', marginBottom: '30px', marginTop: '30px' }}>the student name is {Student.name} and the age is {Student.age} and is that student educated: {Student.isEducated ? "true" : "false"}</p>
//             <div className="someCss">
//                 <button onClick={NameChange}>Name Change</button>
//                 <button onClick={AgeChange}>Age Change</button>
//                 <button onClick={EducatedChange}>Educated Change</button>
//             </div>
//         </>
//     )
// }
// export default StateInObject