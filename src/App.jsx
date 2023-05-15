import './App.css'
import Footer from './components/Footer'
import HeaderLogin from './components/HeaderLogin'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className="App">
        <HeaderLogin/>  
        <NavBar/>
        <Footer/>
      </div>
    </>
  )
}

export default App
