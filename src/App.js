import './App.css';
import './assets/font/ProductSansRegular.ttf'
import {Hero, Balance, HowItWorks, Business, Relations, Model, Footer, Navbar} from './sections/index'

function App() {
  return (
    <div className="App">
      <Navbar />
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
