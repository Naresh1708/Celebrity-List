
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import UsersList from './Components/UsersList';
import Footer from './Components/Footer';

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
      }, [theme]);

  return (
    <div className={"App " + theme}>
      <Header setTheme={setTheme} theme={theme}/>
      <UsersList/>
      <Footer/>
    </div>
  );
}

export default App;
