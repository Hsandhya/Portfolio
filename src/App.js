import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Works from './Components/Works/Works';
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services /> 
      <Experience />
      <Works />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
