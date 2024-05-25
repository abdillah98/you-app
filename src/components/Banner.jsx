import Image from 'next/image';
import React from 'react';
import BadgeWithIcon from './BadgeWithIcon';

const Banner = (props) => {

  return (
    <div className="relative overflow-hidden bg-[#162329] min-h-[190px] rounded-[16px] mb-[24px]">
      {props &&
        <>
          {/* Banner Image  */}
          {props.userPic && 
            <Image 
              src={props?.userPic} 
              className="object-cover" 
              alt="profile-pic" fill
            />
          }
          {/* Banner Image  */}

          <div className="absolute left-[16px] bottom-[16px]">
            
            {/* User Info  */}
            <div className="text-white mb-[10px]">
              <div className="font-bold text-[16px] mb-[4px]">@{props?.username}</div>
              {props?.gender && <div className="text-[13px]">{props.gender}</div>}
            </div>
             {/* User Info  */}

            {/* User horoscope & zodiac  */}
            <div className="flex items-center gap-[10px]">
              {props?.horoscope &&
                <BadgeWithIcon 
                  label={props.horoscope} 
                  iconName="icon-horoscope"
                />              }
              {props?.zodiac &&
                <BadgeWithIcon 
                  label={props.zodiac} 
                  iconName="icon-zodiac"
                /> 
              }
            </div>
            {/* User horoscope & zodiac  */}

          </div>
        </>
      }
    </div>
  );
}

export default Banner;
