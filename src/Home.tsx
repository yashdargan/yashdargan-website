import Profile from './components/Profile';
import Socials from './components/Socials';
import Projects from './components/Projects';
import Video from './components/Video';

const Home: React.FC = () => {
    return (
        <div>
            <Profile />
            <Socials />
            <Projects />
            <Video />
        </div>
    )
}

export default Home