import { Container } from 'react-bootstrap';
import { fetchData } from '../hooks/fetchWithErrorHandling';
import DungeonList, {Dungeon} from '../components/DungeonList';
import ErrorPage from "@/app/components/ErrorPage";

export default async function Dungeons() {
    /*const data = await fetchData<Dungeon[]>('http://localhost:5000/api/dungeons');

    if (data === null) {
        return <ErrorPage />;
    }*/

    const data: Dungeon[] = [
        {id: 1, level: 1, name: "Hui"},
        {id: 2, level: 2, name: "Hui"},
        {id: 3, level: 3, name: "Hui"},
        {id: 4, level: 4, name: "Hui"},
        {id: 5, level: 5, name: "Hui"},
        {id: 6, level: 6, name: "Hui"},
        {id: 7, level: 7, name: "Hui"},
        {id: 8, level: 8, name: "Hui"},
        {id: 9, level: 9, name: "Hui"},
        {id: 10, level: 10, name: "Hui"},
    ];

    return (
        <Container className="mt-5">
            <h1 className="text-center">Подземелья!</h1>
            <DungeonList dungeons={data}/>
        </Container>
    );
}
