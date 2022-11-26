import { React, useState } from 'react';
import Select from 'react-select';
import './dropdown.css';
function Dropdown ()
{
    const colors = [
        {
            id: 1,
            label: "lime",
        },
        {
            id: 2,
            label: "lavender",
        },
        {
            id: 3,
            label: "crimson",
        },
        {
            id: 4,
            label: "darkblue",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "rebeccapurple",
        },
        {
            id: 7,
            label: "ghostwhite",
        },
        {
            id: 8,
            label: "aquamarine",
        },
        {
            id: 9,
            label: "aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='Wrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>colour changing game</h1>
            </center>
            
            <div className="Container">
               <center> <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select></center>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Dropdown;