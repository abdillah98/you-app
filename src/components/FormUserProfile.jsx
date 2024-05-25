import React, { useState } from 'react';
import InputSmall from './InputSmall';
import InputSelectSmall from './InputSelectSmall';
import moment from 'moment';

const horoscope = [ "Areis", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpius", "Sagittarius", "Copricornus", "Aquarius", "Pisces"]
const zodiac = ["Rabbit", "Tiger", "Ox", "Rat", "Pig", "Dog", "Rooster", "Monkey", "Goat", "Horse", "Snake", "Dragon"]

const FormUserProfile = (props) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <InputSmall 
        type="text"
        name="name"
        label="Display name:"
        placeholder="Enter name"
        value={props.name}
        onChange={props.handleChange}
      />
      <InputSelectSmall 
        label="Gender:"
        name="gender"
        placeholder="Select Gender"
        options={["Male", "Female"]}
        defaultOption="Selected Gender"
        value={props.gender}
        onChange={props.handleChange}
      />
      <InputSmall 
        type="date"
        name="birthday"
        label="Birthday:"
        placeholder="DD MM YYYY"
        value={moment(props.birthday).format('YYYY-MM-DD')}
        onChange={props.handleChange}
      />
      <InputSmall 
        label="Horoscope:"
        name="horoscope"
        placeholder="--"
        value={props.horoscope}
        onChange={props.handleChange}
        readOnly
      />
      <InputSmall 
        label="Zodiac:"
        name="zodiac"
        placeholder="--"
        value={props.zodiac}
        onChange={props.handleChange}
        readOnly
      />
      <InputSmall 
        type="number"
        name="height"
        label="Height:"
        placeholder="Add height"
        value={props.height}
        onChange={props.handleChange}
      />
      <InputSmall 
        type="number"
        name="weight"
        label="Weight:"
        placeholder="Add weight"
        value={props.weight}
        onChange={props.handleChange}
      />

    </div>
  );
}

export default FormUserProfile;
