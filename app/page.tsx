import { Container } from 'react-bootstrap';
import ExperienceBar from './components/ExperienceBar';

export default function Home() {

    return (
        <Container className="mt-5">
            <h1 className="text-center">Добро пожаловать в игру!</h1>
            <ExperienceBar experience={400} maxExperience={1000} level={12}/>
        </Container>
    );
}
