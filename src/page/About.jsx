import AboutList from '../components/about/AboutList';
import AboutVisual from '../components/about/AboutVisual';
import { Container } from './style';

const About = () => {
    return (
        <Container>
            <AboutVisual />
            <div className="inner">
                <AboutList />
            </div>
        </Container>
    );
};

export default About;
