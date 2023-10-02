import React, { useState } from "react";
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
