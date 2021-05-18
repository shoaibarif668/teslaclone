
import './App.css';
import Header from './components/Header';
import Accessories from "./assets/Desktop-Accessories.jpg"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg"
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg"
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <div className="app__itemContainer">
        <Item
        title="Lowest Cost Solar Panels in America"
        desc="Money-back gurrentee"
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item
        title="Model S"
        desc="$69,420"
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        />
        <Item
        title="Model 3"
        desc="Money-back gurrentee"
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        />
        <Item
        title="Model X"
        desc="Money-back gurrentee"
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        />
        <Item
        title="Model Y"
        desc="Money-back gurrentee"
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        />
        <Item
        title="Lowest Cost Solar Roof in America"
        desc="Money-back gurrentee"
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        />
        <Item
        title="Accessories"
        desc="Money-back gurrentee"
        descLink=''
        backgroundImg={Accessories}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        />
      </div>
    </div>
  );
}

export default App;
