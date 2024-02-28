// ContactForm.tsx
import React, { useState } from 'react';
import InputField from './InputField';

interface ContactFormProps {
  handleSubmit: (data: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    handleSubmit(formData);
  };

  return (
    <div className="mx-auto w-full px-[64px] lg:px-0" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="sm:justify-center sm:p-4">
        <form className="mx-auto" onSubmit={handleFormSubmit}>
          <InputField
            label='Name'
            name='name'
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div className="lg:gap-4 my-4 grid grid-cols-1 lg:grid-cols-2">
            <InputField
              label='Phone'
              name='phone'
              type='text'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />

            <InputField
              label='Email'
              name='email'
              type='text'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button type="submit" className="w-full text-white bg-[#F1900E] hover:bg-[#ce964c] p-3 rounded-[50px] uppercase">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;