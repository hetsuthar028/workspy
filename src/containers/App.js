
import CalenderComp from '../components/CalenderComp';
import FloatingButton from '../components/FloatingButton';
import NavBar from '../components/NavBar';
import Switcher from '../components/Switcher';
import './App.css';
import ToDo from './ToDo';
import {useState} from 'react';
import Expenses from './Expenses';

function App() {
  const [popupStat, setPopupStat] = useState(4)
  const [mode, setMode] = useState('')

  let togglePop = (e)=>{
    setPopupStat(e.target.value)
    // console.log(e.target)
    
  }

  let changeMode = ()=>{
    setMode(mode => !mode)
    // alert()
  }
  return (
    <div className={ mode ? "dark" : "app"}>
        <NavBar mode={changeMode}/>
        
        <Switcher toggle={togglePop}/>
        <CalenderComp />
        
        {popupStat==4 ? <ToDo /> : <Expenses />}
        <FloatingButton />

    </div>
  );
}

export default App;