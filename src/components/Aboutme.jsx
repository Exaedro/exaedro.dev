import chibi from '../img/chibi.webp'

export function Aboutme() {
    return (
        <div className="separator">
            <section className="aboutme container" id="aboutme">
                <h3 className="underline">About Me</h3>
                <article>
                    <header>
                        <img src={chibi} alt="chibi" />
                    </header>
                    <div>
                        <p>A Junior <span className='green-gradient'>Fullstack</span> developer guy, specialised in backend, <span className='blue-gradient'>3 years</span> of experience, React lover and of <span className='red-gradient'>working with other people</span> mutually.</p>
                    </div>
                </article>
            </section>
        </div>
    )
}