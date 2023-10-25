export function Navbar() {
    return (
        <nav>
            <div className="container">
                <header className="nav-header">
                    <h3>Exaedro</h3>
                </header>
                <div className="nav-body">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#aboutme">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}