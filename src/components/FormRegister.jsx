import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const intialForm = {
  email: '',
  username: '',
  password: ''
}

const FormRegister = ({handleClick, isLoading}) => {
  const [form, setForm] = useState(intialForm);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    console.log(confirmPassword);
    
    if(!handleClick) return; 

    handleClick({...form, confirmPassword})
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[25px] mb-[52px]">
      <div className="flex flex-col gap-[10px]">
        <Input 
          type="email" 
          name="email"
          placeholder="Enter Email" 
          value={form.email}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        <Input 
          type="text" 
          name="username"
          placeholder="Create Username" 
          value={form.username}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        <Input 
          type="password" 
          name="password"
          placeholder="Create Password" 
          value={form.password}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        <Input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      <Button 
        type="submit" 
        disabled={
            isLoading || 
            !form.email.length || 
            !form.username.length || 
            !form.password.length ||
            !confirmPassword.length
        }
      >
        {isLoading ? 'Process...' : 'Register'}
      </Button>
    </form>
  );
};

export default FormRegister;
