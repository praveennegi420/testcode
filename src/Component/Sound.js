export default function Sound(){
    const genere= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    function Genere(props){
        return(
            <div className="genere">
                `Genere ${props.val}`
            </div>
        )
    }

    function AllSounds(){
       return( 
        genere.map(in => {
            <Genere val={in}/>
        })
       )
    }

    return(
        <div className='sound form shadow-2xl  shadow-stone-500 rounded'>
          <h3 className="font-sans font-bold">Sound Preferences</h3>
          <div className='all-sounds'>
            <AllSounds/>
            {/* <button onClick={AllSounds}>MAP</button> */}
          </div>
        <button className="submit bg-blue-500 hover:bg-blue-700 text-white mt-2 mb-2 font-bold py-2 rounded">Confirm Update</button>
        </div>
    )
}