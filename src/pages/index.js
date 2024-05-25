import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import ButtonBack from '@/components/ButtonBack';
import InterestCard from '@/components/InterestCard';
import Layout from '../components/Layout';
import AboutCard from '@/components/AboutCard';
import Icon from '@/components/Icon';

import useLocalStorage from 'use-local-storage';
import { uploadFileFirebase } from '@/utils/uploadFile';
import { getFileUrlByEmail } from '@/utils/getFile';
import axios from 'axios';

import { API_URL } from '@/constant';
import Banner from '@/components/Banner';
import { useRouter } from 'next/router';


export default function HomePage() {
  const router = useRouter()
  const {data: session, status} = useSession()
  const [userData, setUserData] = useState(null);
  const [method, setMethod] = useState(null);
  const isFetchingRef = useRef(false);
  const [gender] = useLocalStorage("gender")

  // Handle Get User Profile 
  const getProfile = useCallback(async () => {
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

      // await getUserImage(response?.data.data.email)
      const userPic = await getFileUrlByEmail(response.data.data.email)
      setMethod(response.data.data.name ? 'PUT' : 'POST')
      setUserData({...response.data.data, userPic})
    }
    catch(error) {
      console.error('Error fetching user profile:', error);
    }
    finally {
      isFetchingRef.current = false;

    }
   
  }, [session])


  useEffect(() => {
    if(status === 'loading') return;

    if (status === 'authenticated') {
      getProfile();
    }
    else {
      router.push('/auth/login')
    }
    
    
  }, [getProfile, status, router]);


  // Handle Upload File (Banner || user pic)
  const handleChangeFile = async (file) => {
    if(!file) return;
    await uploadFileFirebase(file, userData.email)
    await getProfile()
  }


  // Handle Submit Form (create or update)
  const handleSubmit = async (raw) => {
    const access_token = session?.user.access_token
    const apiSlug = method == 'POST' ? 'createProfile' : 'updateProfile'
    const exiosMethod = method == 'POST' ? 'post' : 'put'

    try {
      const { data } = await axios[exiosMethod](`${API_URL}/${apiSlug}`, {
        ...raw,
        height: parseInt(raw.height),
        weight: parseInt(raw.weight),
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': access_token,
        }
      })
      await getProfile()
    }
    catch(error) {
      console.log(error);
    }
  }


  return (
    <Layout>
      {userData &&
        <>
          {/* Bar section */}
          <div className="mb-[28px]">
            <ButtonBack username={userData?.username} useButtonOption/>
          </div>

          {/* Banner  */}
          <Banner {...userData} gender={gender}/>

          {/* User Profile  */}
          <div className="flex flex-col gap-[20px]">
            <AboutCard 
              title="About"
              data={userData}
              handleSubmit={handleSubmit}
              handleChangeFile={handleChangeFile}
            />

            <InterestCard
              title="Interest"
              data={userData}
              handleSubmit={handleSubmit}
            />
          </div>
        </>
      }

    </Layout>
  );
}
