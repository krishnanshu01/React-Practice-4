import { useState } from 'react';
import Input from './components/Input';
import ShowList from './components/ShowList';
import { listArray } from './types';
import Filter from './components/Filter';

function App() {
  const [list, setList] = useState<listArray[]>([]);
  const [search, setSearch] = useState("");

  const filterProps = { list, setList, search, setSearch };

  return (
    <>
      <Filter {...filterProps} />
      <h1>Phonebook</h1>
      <Input setList={setList} list={list} />
      <ShowList list={list} />
    </>
  );
}

export default App;
