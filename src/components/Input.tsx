import React, { useState, useEffect } from "react";
import { InputProp } from "../types";
import axios from "axios";

export default function Input({ setList, list }: InputProp) {
  const [input, setInput] = useState({ name: "", number: "" });

  useEffect(()=>{
    const fetchList= async () => {
        let peopleList = await axios.get('http://localhost:3001/persons');
        console.log({peopleList: peopleList});
        setList(peopleList.data);
    }
    fetchList();
  },[]);
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isExisting = list.some(item => item.name === input.name);
    if (isExisting) {
      alert(`${input.name} already exists`);
      resetForm();
      return;
    }
    setList(prevList => [...prevList, { name: input.name, number: input.number }]);
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
