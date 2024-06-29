// import propType from 'prop-types'
// function List(props) {
//     // sort method arranges everythig in lexicographical order but it doesn't sort numbers

//     // sort is used to sort or arrange anything in a particular way acccording to the condition

//     // fruits.sort((a, b) => a.calories - b.calories);

//     // Filter method is used to filter from an array using a certain condition and gives an array with the satisfied values

//     // as we uses ternary operator we can short it with shortcircuiting we uses && and if both won't be true it wouldn't render that 

    
//     let fruits = props.item;
//     let lowCalFruits = fruits.filter(fruit => fruit.calories > 30);
//     lowCalFruits.sort((a, b) => a.calories - b.calories);
//     const list = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.name}>{lowCalFruit.name}: {lowCalFruit.calories}</li>);
//     return (<>
//         <h3>{props.cateogary}</h3><br />
//         <ol>{list}</ol>
//     </>)
// }
// List.propType = {
//     cateogary: propType.string,
//     item: propType.arrayOf(propType.shape({ name: propType.string, calories: propType.number })),
// }
// List.defaultProps = {
//     cateogary: "cateogary",
//     item: [],
// }
// export default List;