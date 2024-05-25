import React, { useEffect, useRef, useState } from 'react';
import ButtonIcon from './ButtonIcon';
import Icon from './Icon';
import FormUserProfile from './FormUserProfile';
import Image from 'next/image';
import CardTitleButton from './CardTitleButton';
import ProfilePic from './ProfilePic';
const initialForm = {
  name: '',
  gender: '',
  birthday: '',
  horoscope: '',
  zodiac: '',
  height: '',
  weight: '',
  interests: []
}

const AboutSection = ({data, ...props}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if(form) return
    setForm({...initialForm, ...data})
  }, [data, form]);

  const handleChange = e => {
    const { name, value } = e.target 
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = () => {
    if(!props.handleSubmit) return;
    props.handleSubmit(form)
  }

  
  return (
    <div className="flex flex-col gap-[24px]">
      <ProfilePic/>
      <FormUserProfile {...form} handleChange={handleChange}/>
    </div>
  );
}

export default AboutSection;
