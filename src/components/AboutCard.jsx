import React, { useEffect, useState } from 'react';
import CardTitleButton from './CardTitleButton';
import ProfilePic from './ProfilePic';
import FormUserProfile from './FormUserProfile';
import useLocalStorage from 'use-local-storage';

const TextDefault = () => {
  return (
    <p className="text-[#8B9193] text-[14px]">
      Add in your your to help others know you better
    </p>
  )
}

const TextWithData = ({data}) => {
  const filterData = {
    birthday: data.birthday,
    horoscope: data.horoscope,
    zodiac: data.zodiac,
    height: `${data.height} cm`,
    weight: `${data.weight} kg`,
  }
  return (
    <div className="flex flex-col gap-[16px]">
      {Object.keys(filterData).map((key) =>
        <div key={key} className="text-[13px]">
          <span className="text-[#5E6569]">{key}: {" "}</span>
          <span className="text-white">{filterData[key]}</span>
        </div>
      )}
    </div>
  )
}


const AboutCard = ({title, data, ...props}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState(null);
  const [gender, setgender] = useLocalStorage('gender', '');

  useEffect(() => {
    if(form || !data) return

    const newForm = {...data, gender}
    setForm(newForm)
  }, [data, form, gender]);

  const handleChange = e => {
    const { name, value } = e.target 

    if(name == 'gender') {
      setgender(value)
    }

    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async () => {
    console.log(form);
    if(!props.handleSubmit) return;
    await props.handleSubmit(form)
    setIsEdit(false)
  }

  return (
    <div className="relative bg-[#0E191F] rounded-[14px] px-[27px] py-[16px]">
     
      {/* Title area  */}
      <CardTitleButton 
        title={title}
        editMode={isEdit}
        handleEdit={() => setIsEdit(true)}
        handleSubmit={handleSubmit}
      />

      {!isEdit ?
        <>
          {!form?.name ?
            <TextDefault /> :
            <TextWithData data={form}/>
          }
        </> :
        <div className="flex flex-col gap-[24px]">
          <ProfilePic {...form} handleChangeFile={props.handleChangeFile}/>
          <FormUserProfile {...form} handleChange={handleChange}/>
        </div>
      }
    </div>
  );
}

export default AboutCard;
