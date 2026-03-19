
import About from './components/about/About'
import Cases from './components/cases/Cases'
import Contact from './components/contact/Contact'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Process from './components/process/Process'
import Home from './pages/Home'
function App() {
  return (
  <>
  <div>
    <Navbar />
    <Home />
    <About />
    <Cases />
    <Process />
    <Faq />
    <Contact />
    <Footer />
  </div>
  </>
  )
}

export default App
