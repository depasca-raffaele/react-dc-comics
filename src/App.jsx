import Footer from './components/Footer'
import FooterBar from './components/FooterBar'
import Header from './components/Header'
import Main from './components/Main'
import ServiceBar from './components/ServiceBar'
import comics from "./data/comics";

function App() {
 return (
  <div>
    <Header />
    <Main comics={comics} />
    <ServiceBar />
    <Footer />
    <FooterBar />
  </div>
 )
}

export default App
