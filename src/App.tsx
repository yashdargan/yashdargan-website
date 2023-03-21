import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Socials from './components/Socials';
import Projects from './components/Projects';
import Video from './components/Video';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="text-white w-[95vw] p-4 mx-auto md:w-[70vw] xl:w-[40vw]">
      <Navbar />
      <Profile />
      <Socials />
      <Projects />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
