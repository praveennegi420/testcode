import React from 'react'
import axios from 'axios'

export default function Sound(){
    const genere= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P', 'Q', 'R']
    const [intrest, setIntrest]= React.useState({'A':false, 'B':false, 'C':false, 'D':false, 'E':false, 'F':false, 'G':false, 'H':false, 'I':false, 'J':false, 'K':false, 'L':false, 'M':false, 'N':false, 'O':false, 'P':false, 'Q':false, 'R':false})
    function Genere(props){
        const styles = {
            backgroundColor: props.color ? "orange" : "white"
        };
        return(
            <div id={props.id} style={styles} className="genere" onClick={()=>{props.onClick(props.val)}}>
                Genere {props.val}
            </div>
        )
    }

    function handleClick(val){
        setIntrest({...intrest, [val]: !intrest[val]})
        if(!intrest[val]){
            document.getElementById(val).style.backgroundColor = 'blue'
        }
    }

    const AllSounds = genere.map( idx => {
       return <Genere val={idx} color={intrest[idx]} key={idx} id={idx} onClick={handleClick}/>
    })

    function updateSound(){

        const config = { headers: { "content-type": 'application/json' } }
        
        axios.post('http://localhost:8000/updatesound', intrest, config)
        .then(res => console.log('updated'))
        .catch(err => console.log('Not updated'))
    }
    return(
        <div className='sound form shadow-2xl  shadow-stone-500 rounded '>
          <h3 className="font-sans font-bold">Sound Preferences</h3>
          <div className='all-sounds'>
            {AllSounds}
          </div>
        <button onClick={updateSound} className="submit bg-blue-500 hover:bg-blue-700 text-white mt-2 mb-2 font-bold py-2 rounded">Confirm Update</button>
        </div>
    )
}