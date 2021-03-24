// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'
// import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import GetJoke from './components/Routes/GetJoke'

function App() {
  return (
    <Fragment>
      <Header/>
      <main className="container">
          <GetJoke/>
      </main>
    </Fragment>
  );
}

export default App;
