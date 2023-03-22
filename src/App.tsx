import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'

const App: React.FC = () => {
  return (
    <div className="text-white w-[95vw] p-4 mx-auto md:w-[70vw] xl:w-[40vw]">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
