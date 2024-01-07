import { useState } from 'react';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = () => {
    const [count, setCount] = useState(0)
    const greeting = 'Somos Benni, la tienda mágica donde encontrarás todo para tu librería.'

    return (
        <>
            <div>
                <h1>Home</h1>
            </div>
            <div className='main'>
                <div className='itemListContainer'>
                    <ItemListContainer greeting={greeting} />
                </div>
                <div className='iconContainer'>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home