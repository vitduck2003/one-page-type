// InputField.tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label> <br />
      <input
        className="h-[35px] w-full p-3"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${name}`}
      />
    </div>
  );
};

export default InputField;