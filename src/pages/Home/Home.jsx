import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

const Home = () => {
    return (
        <>
            <div>
                <h1>Home</h1>
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