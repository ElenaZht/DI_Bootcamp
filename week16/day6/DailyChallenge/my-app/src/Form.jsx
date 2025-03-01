import React from 'react'

export default function Form({userInformation, setUserInformation}) {

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newInformation = {
            ...userInformation,
            [name]: (type === 'checkbox') ? checked : value
        }
        setUserInformation(newInformation)

    }

    return (
        <form>
            <input name='firstName' type="text" placeholder='First Name' required onChange={handleChange}/>
            <input name='lastName' type="text" placeholder='Last Name' required onChange={handleChange}/>
            <input name='age' type="number" placeholder='Age' required onChange={handleChange}/>

            <div>
                <input type="radio" name="sex" value='male' onChange={handleChange}/><label htmlFor="sex">Male</label>
            </div>
            <div>
                <input type="radio" name="sex" value='female' onChange={handleChange}/><label htmlFor="sex">Female</label>
            </div>
            <label htmlFor="destination">Select your destination</label>
            <select name="destination" required value={userInformation.destination} onChange={handleChange}>
                <option disabled value="">--please, choose your destination--</option>
                <option value="Japan">Japan</option>
                <option value="Thailand">Thailand</option>
                <option value="Brazil">Brazil</option>
            </select>
            <label htmlFor="">Dietary restrictions</label>
            <div>
                <input type="checkbox" name="nutsFree" onChange={handleChange}/>
                <label htmlFor="nutsFree">Nuts free</label>
            </div>
            <div>
                <input type="checkbox" name="lactoseFree" onChange={handleChange}/>
                <label htmlFor="lactoseFree">Lactose free</label>
            </div>
            <div>
                <input type="checkbox" name="vegan" onChange={handleChange}/>
                <label htmlFor="vegan">Vegan</label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}
