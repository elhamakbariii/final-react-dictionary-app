import logo from './logo.png'
import Dictionary from './Dictionary'
import Result from './Result'
import './App.css'

 function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <br/>
           <h1><strong> Dictionary</strong></h1> 
          
        </header>
        <Dictionary defaultKeyword="amazing" />
        <Result defaultKeyword="amazing" />
        <footer>
          coded by<em> Elham Akbari</em> , open source code on{' '}
          <a
            href="https://github.com/elhamakbariii/final-react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
             <strong>github</strong>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App;
