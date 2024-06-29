// import { useState } from 'react'

// function OnChangeEvent() {
//     // on change event handeler is used in form elements like input, textarea, radio, drop down and it immediately reflects the change
//     // made in the doc

//     const [name, setName] = useState("Guest");
//     const handleClick = (e) => setName(e.target.value);

//     const [Number, setNumber] = useState(1);
//     const handleNumber = (e) => setNumber(e.target.value);

//     const [comment, setComment] = useState("");
//     const handleTextArea = (e) => setComment(e.target.value);


//     const [card, setCard] = useState("Select an Option");
//     const handleCard = (e) => setCard(e.target.value);

//     const [shipping, setShipping] = useState("PickUp");
//     const handleShipping = (e) => setShipping(e.target.value);
//     return (
//         <>
//             <input type="text" value={name} onChange={(e) => handleClick(e)} />
//             <p>Name : {name}</p>

//             <input type="number" onChange={(e) => handleNumber(e)} value={Number} />
//             <p>Number : {Number}</p>

//             <textarea placeholder='Enter the delivery instructions' onChange={(e) => handleTextArea(e)}></textarea>
//             <p>Comment : {comment}</p>

//             <select onChange={(e) => handleCard(e)}>
//                 <option value="">Select an Option</option>
//                 <option value="VisaCard">Visa card</option>
//                 <option value="MasterCard">Master card</option>
//                 <option value="GiftCard">Gift card</option>
//             </select>
//             <p>Payment Method : {card}</p>

//             <label >
//                 <input type="radio" value="PickUp" checked={shipping === "PickUp"} onChange={(e) => handleShipping(e)} />
//                 Pick Up
//             </label>
//             <label>
//                 <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={(e) => handleShipping(e)} />
//                 Delivery
//             </label>
//             <p>Shipping : {shipping}</p>
//         </>
//     )
// }

// export default OnChangeEvent