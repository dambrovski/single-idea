import Link from 'next/link';

function Home() {
    return(<div>

        <h1>Home - Seabook</h1>

        <Link href="/sobre">
            <a>Acessar Pagina sobre</a>
        </Link>
        <Link href="/tempo">
            <a>Acessar Pagina de Tempo</a>
        </Link>
    </div>)
}

export default Home;