import React, { useState } from "react";
import { InputProp } from "../types";

export default function Input({ setList, list }: InputProp) {
  const [input, setInput] = useState({ name: "", number: "" });

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isExisting = list.some(item => item.name === input.name);
    if (isExisting) {
      alert(`${input.name} already exists`);
      resetForm();
      return;
    }
    setList(prevList => [...prevList, { name: input.name, Number: input.number }]);
    resetForm();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput(prevInput => ({ ...prevInput, [name]: value }));
  };

  const resetForm = () => {
    setInput({ name: "", number: "" });
  };

  return (
    <>
      <div>
        <h2>Add a new</h2>
        <form onSubmit={handleForm}>
          name: <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <div>
            number: <input
              type="text"
              name="number"
              value={input.number}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
