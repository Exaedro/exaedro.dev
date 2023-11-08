export function Contact() {
    return (
        <>
            <div className="separator">
                <section className="contact container">
                    <h2 className="yellow-gradient">Contact me!</h2>
                    <form>
                        <label>Name</label>
                        <input type="text" name="username" placeholder="Pepe" />
                        <label>Email</label>
                        <input type="email" name="email" placeholder="pepe@gmail.com"/>
                        <label>Message</label>
                        <textarea name="message" cols="30" rows="10" placeholder=". . ."></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </div>
        </>
    )
}