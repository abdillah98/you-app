import Layout from '@/components/Layout';
import TextTitle from '@/components/TextTitle';
import FormLogin from '@/components/FormLogin';
import TextWithLink from '@/components/TextWithLink';
import ButtonBack from '@/components/ButtonBack';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  const handleClick = async (raw) => {
    setIsLoading(true)
    setIsError(null)
		const res = await signIn("credentials", {
			...raw,
			redirect: false
		})

		if(!res.ok) {
			setIsLoading(false)
      setIsError(res.error)

      const timer = setTimeout(() => {
        setIsError(null);
      }, 3000);
  
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
      return;
		}

    router.push('/')
  }

  return (
    <Layout useGradient>
      <div className="mb-[60px]">
        <ButtonBack />
      </div>
      <TextTitle>Login</TextTitle>
      <FormLogin 
        isLoading={isLoading}
        handleClick={handleClick}
      />
      <TextWithLink 
        text="No account?" 
        textLink="Register here" 
        href="/auth/register"
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
