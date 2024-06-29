// import { useEffect } from "react"
// import { useState } from "react"

// function Clock() {
//     const [time, setTime] = useState(new Date())

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setTime(new Date())
//         }, 1000)

//         return () => {
//             clearInterval(intervalId);
//         }
//     }, [])

//     function formatTime() {
//         let hours = time.getHours();
//         let minutes = time.getMinutes();
//         let sec = time.getSeconds();
//         let meridiam = hours > 12 ? "PM" : "AM";

//         hours = hours % 12 || 12
//         return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(sec)}  ${meridiam}`
//     }
//     function PadZero(number) {
//         return (number < 10 ? "0" : "") + number
//     }
//     return (
//         <>
//             <p>{formatTime()}</p>
//         </>
//     )
// }
// export default Clock