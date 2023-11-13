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
    <div className='container'>
      <h1>Search filter</h1>
      <h3>Type the fruit you want to search</h3>
      <input onChange={handleList}/>
      {filteredList && filteredList.map((item,index)=>(
        <div key={index} className='list-item'>{item}</div>
      ))}
    </div>
  );
}

export default App;
