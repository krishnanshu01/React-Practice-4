import React, { useState } from 'react'
import { listArray } from '../types';

interface FilterProps {
    setList: React.Dispatch<React.SetStateAction<listArray[]>>;
    list: listArray[];
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({ list, setList, setSearch, search }: FilterProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredList = list.filter(item => item.name === search);
    setList(filteredList);
    setSearch("");
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Find with name</h2>
        Enter name here:
        <input 
          type='text'
          value={search}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </>
  )
}
