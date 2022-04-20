import "./App.css";
import Navbar  from './components/Navbar';
import Slider from './components/Slider';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Content from './components/Content';
import Search from './components/Search';
import Footer from './components/Footer';
import Login from './components/Login';
import Posts from './components/Posts';

import CounterContextProvider from "./contexts/CounterContextProvider";
import DarkContextProvider from "./contexts/DarkContextProvider";

function App() {
  return (

    <DarkContextProvider>
    <Navbar />
    <Slider />
    {/* <Counter3 /> */}
    <Content />
    <Login />
    <Search />
    <Posts />
    <Footer />
    </DarkContextProvider>
  );
}

export default App;
