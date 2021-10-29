import './App.css';
import Header from "./components/header/Header";
import HeaderAndSectionBackground from "./components/hoc/HeaderAndSectionBackground";
import Intro from "./components/intro/Intro";
import GetStarted from "./components/getStarted/GetStarted";
import TextAndImageContent from "./content/TextAndImageContent";
import QuestionsContent from "./content/QuestionsContent";
import Footer from "./components/footer/Footer";

function App(props) {
  return (
      <div id='main'>
      <HeaderAndSectionBackground>
    <Header/>
        <Intro/>
          <GetStarted/>
      </HeaderAndSectionBackground>
          <TextAndImageContent  {...props}/>
          <QuestionsContent {...props}/>
          <GetStarted smallPadding/>
          <Footer/>
        </div>
  );
}

export default App;
