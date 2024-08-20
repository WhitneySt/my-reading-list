import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleReset = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  return [form, handleChange, handleReset];
};

export default useForm;
