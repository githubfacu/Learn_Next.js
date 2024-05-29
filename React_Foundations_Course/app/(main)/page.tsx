import Article from "../components/article/article";


export default function HomePage() {

    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Article names={names} />
        </div>
    );
}
