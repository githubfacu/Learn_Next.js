import LikeButton from "../buttons/likeButton"


interface ArticleProps {
    names: string[]
}

export default function Article({names} : ArticleProps) {

    return (
    <main>
        <h2>The Article</h2>
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facere neque autem. Libero consequatur cumque sed quibusdam. Inventore ipsum laboriosam harum repellendus necessitatibus. Corrupti autem ipsa sit unde nulla saepe.</p>
    
        <LikeButton />
    
    </main>)
}