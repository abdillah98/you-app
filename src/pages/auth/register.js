import Layout from '@/components/Layout';
import TextTitle from '@/components/TextTitle';
import TextWithLink from '@/components/TextWithLink';
import ButtonBack from '@/components/ButtonBack';
import FormRegister from '@/components/FormRegister';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '@/constant';

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  const handleClick = async (raw) => {
    if(raw.password != raw.confirmPassword) {
      setIsError("Confrim password does not match!")
      return;
    }

    setIsLoading(true)
		
    const { data } = await axios.post(`${API_URL}/register`, raw, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if(data.message == 'User already exists') {
      setIsError(data.message)
      setIsLoading(false)

      const timer = setTimeout(() => {
        setIsError(null);
      }, 3000);
  
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
    else {
      setIsError(data.message);
      
      const timer = setTimeout(() => {
        setIsError(null);
        router.push(`/auth/login?email=${raw.email}`)
      }, 3000);
  
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  }

  return (
    <Layout useGradient>
      <div className="mb-[60px]">
        <ButtonBack />
      </div>
      <TextTitle>Register</TextTitle>
      <FormRegister 
        isLoading={isLoading}
        handleClick={handleClick}
      />
      <TextWithLink 
        text="Have an account?" 
        textLink="Login here" 
        href="/auth/login"
      />
      {isError &&
        <div className="absolute w-full -ml-[23px] flex justify-center bottom-[20px]">
          <div className="bg-[#E0C796] text-black px-[10px] py-[4px] rounded-lg z-10 text-[13px] font-semibold">
            {isError}
          </div>
        </div>
      }
    </Layout>
  );
}
