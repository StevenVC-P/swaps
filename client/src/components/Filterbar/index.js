import React, { useState, useEffect} from "react";
import Checkbox from "../Checkbox";

function FilterBar(props) {
    const [categories, setCategories] = useState([
        {id: 1, value: "Kitchen", isChecked: false},
        {id: 2, value: "Bathroom", isChecked: false},
        {id: 3, value: "Laundry", isChecked: false},
        {id: 4, value: "Personal", isChecked: false},
        {id: 5, value: "Cleaning", isChecked:false},
    ])

    const renderMainFeed = () => {
        let result = props.product.filter(function( o1) {
            return categories.some(function(o2){
                return o1.category === o2.value && o2.isChecked === true
            })
        })
        props.setFilteredState(result)
        console.log("renderMainFeed", result)
    };

    const checkAllFalse = e => {
        let allFalse = []
        categories.forEach(category => {
            if (category.isChecked === false) {
                allFalse.push("false")
            } else {
                allFalse.push("true")
            };
        })
        if (allFalse.includes("true")) {
            console.log("THE BIG True", props.count)
            allFalse = []
            return
        } else {
            console.log("THE BIG False", props.count)
            props.setCount(props.count+1)
            allFalse = []
        }
        
    }

    const handleCheckChildElement = (event) => {
        let categoryArr = categories
        categoryArr.forEach(category => {
            if (category.value === event.target.value)
                category.isChecked = event.target.checked
        })
        setCategories(categoryArr)
        renderMainFeed()
        checkAllFalse()

        console.log(categories)
    }
    return (
        <>
            <div className="App">
                <ul>
                    {categories.map((category) => {
                        return (<Checkbox handleCheckChildElement={handleCheckChildElement} {...category} />)
                    })}
                </ul>
            </div>
        </>
    )
}
export default FilterBar

//categories.filter(renderMainFeed)
        // let newArray = props.product.filter( event, , => {
        //     let allCategory = props.product.category;
        //     let retCat = ""

        //     for (let i = 0; i < categories.length; i++) {
        //         if (categories[i].isChecked) {
        //             props.product.categories === categories[i].value
        //             // console.log(categories.value)
        //         }
        //         return retCat
        //     }
        //     let result = allCategory.includes(retCat)
        //     return result
        // });
        // console.log("testing", newArray)


//     const [filterObject, setFilterObject] = useState({})

//     function handleCheckboxChange(event) {
//         const { name, checked }  = event.target;
//         setFilterObject({...filterObject, [name]: checked});
//         switch (filterObject) {
//             case true:
//                 console.log("true")
//             break;
//             case false:
//                 console.log("false")
//             break;
//             default:
//         }

//     };

//     function filterMainFeed(event) {
//         event.preventDefault();
//     }

//     return(
//         <ul className="list-group">
//             <li className="list-group-item">
//             <Checkbox name="Kitchen"
//                 onChange={handleCheckboxChange}/>
//              <label htmlFor="kitchen"> Kitchen</label>
//             </li>
//             <li className="list-group-item">
//             <Checkbox name="Bathroom"
//                 onChange={handleCheckboxChange}/>
//              <label htmlFor="bathroom"> Bathroom </label>
//             </li>
//             <li className="list-group-item">
//             <Checkbox name="Laundry"
//                 onChange={handleCheckboxChange}/>
//              <label htmlFor="Laundry"> Laundry</label>
//             </li>
//             <li className="list-group-item">
//             <Checkbox name="Personal"
//                 onChange={handleCheckboxChange}/>
//              <label htmlFor="personal"> Personal </label>
//             </li>
//             <li className="list-group-item">
//             <Checkbox name="Cleaning Products"
//                 onChange={handleCheckboxChange}/>
//              <label htmlFor="Cleaning Products"> Cleaning Products </label>
//             </li>
//         </ul>
//     )
// }