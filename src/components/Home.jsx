import arrow from "../img/arrow.webp";

export function Home() {
    return (
        <>
            <div className="bubble-blue"></div>
            <div className="bubble-pink"></div>
            <main className="home container">
                <div className="text">
                    <h3>Hi! I'm</h3>
                    <h1 className="pink-gradient">Exaedro</h1>
                    <h3 className="yellow-gradient">Fullstack Developer</h3>
                </div>
            </main>
            <img src={arrow} alt="Arrow" className="arrow" />
        </>
    );
}
