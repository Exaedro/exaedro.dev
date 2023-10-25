import chibi from '../img/chibi.webp'

export function Aboutme() {
    return (
        <section className="aboutme container" id="aboutme">
            <h3>About Me</h3>
            <article>
                <header>
                    <img src={chibi} alt="chibi" />
                </header>
                <main>
                    <p>A Junior <span className='green-gradient'>Fullstack</span> developer guy, specialised in backend, <span className='blue-gradient'>3 years</span> of experience, React lover and of <span className='red-gradient'>working with other people</span> mutually.</p>
                </main>
            </article>
        </section>
    )
}