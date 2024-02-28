// Form.tsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function PageForm() {
  const handleSubmit = (formData: FormData) => {
    fetch('https://hook.eu2.make.com/4u0ejvj2xoc8p31oc8xbcut4wrsdyxbk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Gửi thành công!');
        } else {
          throw new Error('Lỗi rồi: ' + response.status);
        }
      })
      .catch((error) => {
        toast.error('Lỗi: ' + error.message);
      });
  };

  return (
    <div className='mx-auto'>
        <h2
          style={{ fontFamily: 'Oswald' }}
          className="text-black text-center text-[60px] font-bold mb-[32px] w-full"
        >
          Have something to say?
        </h2>
        <div className="mx-auto md:mx-6">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 bg-gray-300 mx-6 lg:mx-[180px] items-center py-5">
            <ContactInfo />
            <ContactForm handleSubmit={handleSubmit} />
          </div>
        </div>
      <ToastContainer />
    </div>
  );
}

export default PageForm;