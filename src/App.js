import './App.css';
import { useState } from 'react';

function App() {

  const list = [
    'Banana',
    'Apple',
    'Orange',
    'Grape',
    'Mango',
    'Pineapple',
    'Watermelon'
  ];

  const [filteredList, setFilteredList] = useState(list);

  const handleList = (event) => {
    const filteredValues = list.filter((item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
    setFilteredList(filteredValues)
  }

  return (
    <div>
      <h1>Search filter</h1>
      <input onChange={handleList}/>
      {filteredList && filteredList.map((item,index)=>(
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
