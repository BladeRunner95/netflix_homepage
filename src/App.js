import './App.css';
import Header from "./components/header/Header";
import HeaderAndSectionBackground from "./components/hoc/HeaderAndSectionBackground";
import Intro from "./components/intro/Intro";
import GetStarted from "./components/getStarted/GetStarted";
import TextAndImageContent from "./content/TextAndImageContent";
import QuestionsContent from "./content/QuestionsContent";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter id='main'>
      <HeaderAndSectionBackground>
    <Header/>
        <Intro/>
          <GetStarted/>
      </HeaderAndSectionBackground>
          <TextAndImageContent  {...props}/>
          <QuestionsContent {...props}/>
          <GetStarted smallPadding/>
          <Footer/>
        </BrowserRouter>
  );
}

export default App;
