import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import About from './components/about';
import Carousel from './components/carousel';
import Divider from './components/divider';

export default function Home() {
    return (
        <div>
            <html data-theme="luxury"><head></head></html>
            <Navbar />
            <Hero />
            <About />
            <Divider/>
            <Carousel />
            <div className="card  grid h-20 place-items-center"></div>
            {/*<button className="btn btn-primary">Get Started</button>*/}
            <Footer />
            </div>
      
    );
  }