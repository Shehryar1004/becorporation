import './App.css';
import './assets/font/ProductSansRegular.ttf'
import {Hero, Balance, HowItWorks, Business, Relations, Model, Footer} from './sections/index'

function App() {
  return (
    <div className="App">
      <Hero />
      <Balance />
      <HowItWorks />
      <Business />
      <Relations />
      <Model />
      <Footer />
    </div>
  );
}

export default App;
