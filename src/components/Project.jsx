import githubLogo from "../img/github-mark.svg";

export function Project({ name, description, link, gitHub, cover, gradient }) {
    return (
        <article className="project">
            <header>
                <a href={link} rel="noreferrer" target="_blank">
                    <img src={cover} alt="Exa-library-api" />
                </a>
                <a
                    className="github"
                    href={gitHub}
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={githubLogo} alt="GitHub" />
                </a>
            </header>
            <div className="project-info">
                <h2 className={gradient}>{name}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}
