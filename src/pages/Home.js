import '../styles/home.css'
import AvailableDjs from "../Component/availableDjs";
export default function Home() {
  return (
    <div className="main">
       
        
        <div>
            <div className='djwk'>
              <h2 class='text-lg pb-10 font-bold'>DJ OF THE WEEK</h2>
              <img className='mx-auto' src='https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
            <div className='avdj'>
              <h2 class='text-base font-bold'>Available DJs</h2>
              <AvailableDjs/>
            </div>
        </div>
    </div>
  );
}