import Link from "next/link"

interface HeaderProps {
    title?: string
}

export default function Header({title}: HeaderProps) {

    return (
        <header>
            <h3>Logo</h3>
            <h1>{title ? title : 'Default Title'}</h1>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/directorio'>Directorio</Link>
                <Link href='/ruta'>Ruta</Link>
            </nav>
        </header>
    )
}