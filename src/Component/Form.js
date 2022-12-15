import axios from "axios"
import React from "react"

export default function Form() {
    const [details, setDetails]= React.useState({name:'', about:''})
    
    function handleChange(e){
        e.preventDefault()
        setDetails({...details, [e.target.name]: e.target.value})
    }
    
    function onSubmit(e){
        e.preventDefault()
        const config = { headers: { "content-type": 'application/json' } }
        axios.post('http://localhost:8000/updatebasic', details, config)
        .then(res=> console.log('Details Sent'))
        .catch(err => console.log('Error Occured'))
    }

    return (
        <div className="form shadow-2xl  shadow-stone-500 rounded">
            <h3 className="font-sans font-bold">Basic Information</h3>
            <form>
                <label className="font-sans mt-3">User Name</label>
                <input className="input" name="name" onChange={handleChange} type='text' placeholder='John Doe' />

                <label className="font-sans block mt-2">About</label>
                <input className="about" name="about" onChange={handleChange} type='textarea' placeholder='About'/>

                <button onClick={onSubmit} className="submit bg-blue-500 hover:bg-blue-700 text-white mt-2 font-bold py-2 rounded ml-4">Confirm Update</button>
            </form>
        </div>
    )
}