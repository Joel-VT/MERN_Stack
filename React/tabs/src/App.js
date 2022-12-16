import './App.css';
import { useState } from 'react';
import TabWrapper from './components/TabWrapper';

function App() {
  const [tabs, setTabs] = useState([
    {
      name: "Tab 1",
      message: "Tab 1 content is displayed",
      isSelected: true
    },
    {
      name: "Tab 2",
      message: "Tab 2 content is displayed",
      isSelected: false
    },
    {
      name: "Tab 3",
      message: "Tab 3 content is displayed",
      isSelected: false
    }
  ]);
  return (
    <div className="App">
      <TabWrapper tabs = {tabs} setTabs = {setTabs}/>
    </div>
  );
}

export default App;
