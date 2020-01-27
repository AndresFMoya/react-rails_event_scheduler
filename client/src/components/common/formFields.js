import React from 'react';
import { FormLabel, FormControl } from 'react-bootstrap';

const TextFieldGroup = ({ label, id, type, name, placeholder, value, onChange }) => {
  return (
    <div className="formFields">
      <FormLabel>{label}</FormLabel>
      <FormControl
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextFieldGroup;