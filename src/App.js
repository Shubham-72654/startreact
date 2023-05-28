import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');  // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#152327';
      showAlert("Dark mode has been enabled", "success");

      // change title dynamically
      document.title = "TextUtils - Dark Mode";

      // for automatic change title after set time.(flash title)
      // setInterval(() => {
      //   document.title = "TextUtils install now";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "install now";
      // }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="Utils About"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>

          <Routes>
            <Route exact path="/about"
              element={<About />} >
            </Route>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} >
            </Route>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;