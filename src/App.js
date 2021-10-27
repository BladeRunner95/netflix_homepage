import './App.css';
import Header from "./components/header/Header";
import HeaderAndSectionBackground from "./components/hoc/HeaderAndSectionBackground";
import Intro from "./components/intro/Intro";
import GetStarted from "./components/getStarted/GetStarted";
import TextAndImage from "./components/textAndImage/TextAndImage";
import TextAndImageContent from "./components/hoc/TextAndImageContent";

function App(props) {
  return (
      <div id='main'>
      <HeaderAndSectionBackground>
    <Header/>
        <Intro/>
          <GetStarted/>
      </HeaderAndSectionBackground>
          <TextAndImageContent  {...props}/>
        </div>
  );
}

export default App;
