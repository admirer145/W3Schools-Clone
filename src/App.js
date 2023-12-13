import './App.css';

import Header from './components/header/header';
// import Footer from './components/footer/footer';
// import Body from './body/body';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="col">
          <Header/>
        </div>
        {/* <div class="col">
          <Body/>
        </div>
        <div class="col">
          <Footer/>
        </div> */}
      </div> 
    </div>
  );
}

export default App;
