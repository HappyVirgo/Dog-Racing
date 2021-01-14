import React from 'react';

import LuckyDip from './components/LuckyDip'
import './App.css';

const traps = [
  {
    no: '1',
    name: 'Savana Marley',
    betAt: '3/1'
  },
  {
    no: '2',
    name: 'Sligo Lilly',
    betAt: '11/4'
  },
  {
    no: '3',
    name: 'Oakfront Santa',
    betAt: '11/1'
  },
  {
    no: '4',
    name: 'Hather Pearl',
    betAt: '11/6'
  },
  {
    no: '5',
    name: 'Wanadoo',
    betAt: '6/1'
  },
  {
    no: '6',
    name: 'Dromscarra Tammy',
    betAt: '8/1'
  }
]

function App() {
  return (
    <div className="App">
      <LuckyDip traps={traps} />
    </div>
  );
}

export default App;
