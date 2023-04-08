import './App.css';
import Home from "../src/components/Home"
import Courses from './components/Courses';
import Appointment from './components/Appointment';
import Faq from './components/Faq';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Home/>
      <Courses name="test1"/>
      <Appointment/>
      <Faq/>
      <About/>
    </div>
  );
}

export default App;
