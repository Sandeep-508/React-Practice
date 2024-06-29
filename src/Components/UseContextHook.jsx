// use context hook allows us to share values between multiple components without using props

// for provider component
// import { createContext } from "react"
// export const MyContext = createContext();
/* <MyContext.provider value={value}> */
// <Child />
// </MyContext.provider>


// for consumer
// import React, { useContext } from "react"
// import MyContext from './UseContextHook'
// const value = useContext(MyContext)


// import { createContext, useContext, useState } from "react"
// import UsingUseContext from "./UsingUseContext";

// export const MyContext = createContext();

// function UseContextHook() {
//     const [user, setUser] = useState("Bro");

//     return (
//         <div>
//             <h1>{`Hello ${user}`}</h1>
//             <MyContext.Provider value={user}>
//                 <UsingUseContext />
//             </MyContext.Provider>
//         </div>
//     )
// }
// export default UseContextHook