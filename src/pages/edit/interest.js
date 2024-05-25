import Layout from '@/components/Layout';
import ButtonBack from '@/components/ButtonBack';
import React, { useEffect, useRef, useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { API_URL } from '@/constant';
import { useRouter } from 'next/router';

const InterestPage = ({data, ...props}) => {
  const router = useRouter()
  const {data: session, status} = useSession()
  const [userData, setUserData] = useState(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    const getProfile = async () => {
      if (!session || !session.user.access_token || isFetchingRef.current) {
        return;
      }
      
      isFetchingRef.current = true;

      try {
        const response = await axios.get(`${API_URL}/getProfile`, {
          headers: {
            'x-access-token': session.user.access_token,
          }
        })

        if(!response) {
          throw new Error('Failed to fetch user profile');
        }
        setUserData(response.data.data)
      }
      catch(error) {
        console.error('Error fetching user profile:', error);
      }
      finally {
        isFetchingRef.current = false;
      }
     
    }
    
    if(status === 'loading') return;

    if (status === 'authenticated') {
      getProfile();
    }
    else {
      router.push('/auth/login')
    }

    // getProfile(data?.user.access_token)
  }, [session, status, router]);


  const handleChangeInterest = (value) => {
    setUserData(prev => ({...prev, interests: value}))
  }


  const handleSubmit = async () => {
    const access_token = session?.user.access_token

    try {
      const { data } = await axios.put(`${API_URL}/updateProfile`, {
        ...userData,
        height: parseInt(userData.height),
        weight: parseInt(userData.weight),
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': access_token,
        }
      })
      router.push('/')
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <Layout useGradient>
      <div className="flex item-center justify-between mb-[70px]">
        <ButtonBack/>
        <button
          onClick={handleSubmit}
          className="
            bg-gradient-to-r 
            from-[#ABFFFD]
            to-[#4599DB]
            inline-block 
            text-transparent 
            bg-clip-text
            font-semibold
          "
        >
          Save
        </button>
      </div>

      <div className="mb-[35px]">
        <div className="
          bg-gradient-to-r 
          from-[#D5BE88]
          to-[#F8FAE5]
          text-transparent 
          bg-clip-text 
          text-[14px] 
          font-bold
          mb-[10px]
          "
        >Tell everyone about yourself</div>
        <div className="text-white text-[20px] font-bold">What interest you?</div>
      </div>

      {userData &&
        <TagsInput
          value={userData?.interests}
          onChange={handleChangeInterest}
          name="interest"
          placeHolder="Enter interest"
        />
      }
      
    </Layout>
  );
}

export default InterestPage;
