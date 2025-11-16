import { useState,useEffect } from 'react'
import {Header,Footer,About,Contact,Hero,Products,Highlights} from './components/index'
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Header scrolled={scrolled} />
      <Hero />
      <Products />
      <About />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  )
}
export default App