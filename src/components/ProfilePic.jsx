import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const ProfilePic = (props) => {
  console.log('props', props);
  const inputFile = useRef(null)
  const [userPic, setUserPic] = useState('' || props?.userPic)

  const handleClickFile = () => {
    inputFile.current.click()
  }

  const handleChangeFile = async (e) => {
    const { files } = e.target

    if(files.length > 0) {
      const picUrl = URL.createObjectURL(files[0]);
      setUserPic(picUrl)

      if(!props.handleChangeFile) return
      props.handleChangeFile(files[0])
    }
  }

  return (
    <div className="flex items-center gap-[16px]">
      <button 
        onClick={handleClickFile}
        className="flex justify-center items-center w-[57px] h-[57px] rounded-[17px] bg-[#162329] relative"
      >
        <input 
          type="file"
          className="hidden"
          onChange={handleChangeFile}
          ref={inputFile}
        />
        {userPic?.length > 0
          ? <Image src={userPic} className="rounded-[16px]" alt="profile-pic" fill/>
          : <Icon name="icon-plus"/>
        }
      </button>
      <div className="text-white text-[12px]">Add image</div>
    </div>
  );
}

export default ProfilePic;
