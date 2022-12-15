import '../styles/nearby.css'
import DragDrop from "./Drag-n-Drop";

export default function Profile() {
    return (
        <div className='profile-box'>
            <h2 class='ml-8 text-lg font-sans font-bold'>PROFILE</h2>
            <div class='rounded-2xl shadow-2xl shadow-stone-500 profile'>
                <div className='flex my-4 '>
                    <div className=''>
                        <img className='h-28 m-10 my-4' src='https://s.studiobinder.com/wp-content/uploads/2022/02/Don-Draper-Headshot-StudioBinder.png' />
                        <h3 className='ml-12 font-sans text-xs mb-3 '>Current Profile Photo</h3>
                    </div>
                    <div className='justify-center profile-info font-sans'>
                        <h3 className='text- font-bold'>Stephen Darko</h3>
                        <h4 className='text-sm'>34 Odum Lane, East Leagon</h4>
                    </div>
                    <div className='drag-drop'>
                        <DragDrop />
                    </div>
                </div>
            </div>
        </div>
    )
}