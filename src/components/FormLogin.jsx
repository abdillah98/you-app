import Input from './Input';
import Button from './Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const intialForm = {
  email: '',
  username: '',
  password: ''
}

const FormLogin = ({handleClick, isLoading}) => {
  const router = useRouter()
  const {email} = router.query

  const [form, setForm] = useState(intialForm);

  useEffect(() => {
    if(!router.isReady) return; 
    setForm(prev => ({...prev, email: email || '' }))
  }, [router, email]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    if(!handleClick) return; 

    const validate = emailRegex.test(form.email)

    if(!validate) {
      form.username = form.email
      form.email = ''
    }
    else {
      form.username = ''
    }

    handleClick(form)
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[25px] mb-[52px]">
      <div className="flex flex-col gap-[10px]">
        <Input 
          type="text" 
          name="email"
          placeholder="Enter Username/Email" 
          value={form.email}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Input 
          type="password" 
          name="password"
          placeholder="Enter Password" 
          value={form.password}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit"
        disabled={
          isLoading || 
          !form.email.length || 
          !form.password.length
        }
      >
        {isLoading ? 'Process...' : 'Login'}
      </Button>
    </form>
  );
};

export default FormLogin;
