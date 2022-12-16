import { Fragment } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OptionBar from './components/OptionBar/OptionBar';
import Routes from './components/Routes';

function App() {
  return (
    <Fragment>
      <div className="main-container">
        <Header />
        <OptionBar />
        <Routes />
        <Footer />
      </div>
    </Fragment>
    
  )
  
}

export default App;
