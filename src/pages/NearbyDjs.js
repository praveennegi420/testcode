import '../styles/nearby.css'
import React from 'react';
import axios from 'axios';
import Profile from '../Component/Profile';
import Form from '../Component/Form'
import Sound from '../Component/Sound';

export default function NearbyDjs() {

  const [formData, setFormData] = React.useState({name:'', about:'', sound:[]})

  return (
    <div className="NearbyDjs ml-10">
      <Profile />
      <div className='flex mt-10 below-profile mb-9'>
        <Form  />
        <Sound />
      </div>
    </div>
  );
}