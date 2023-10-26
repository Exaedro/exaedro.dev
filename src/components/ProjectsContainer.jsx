// Covers
import project1 from "../img/project-1.webp"; // Library-api
import project2 from "../img/project-2.webp"; // NeeScan
import project3 from "../img/project-3.webp"; // Von Neumann Conversor

import { Project } from "./Project.jsx";

export function ProjectsContainer() {
    return (
        <>
            {/* <div className="waves">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="rgb(255, 95, 244)"
                        fill-opacity="1"
                        d="M0,32L40,26.7C80,21,160,11,240,42.7C320,75,400,149,480,176C560,203,640,181,720,176C800,171,880,181,960,197.3C1040,213,1120,235,1200,224C1280,213,1360,171,1400,149.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="rgb(255, 95, 244)"
                        fill-opacity="1"
                        d="M0,32L40,26.7C80,21,160,11,240,42.7C320,75,400,149,480,176C560,203,640,181,720,176C800,171,880,181,960,197.3C1040,213,1120,235,1200,224C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                    ></path>
                </svg>
            </div> */}
            <section className="projects container" id="projects">
                <h3>Projects</h3>
                <Project
                    name="Exa-library-api"
                    description="An api of books for libraries."
                    gitHub="https://github.com/exaedro/library-api"
                    cover={project1}
                    link="https://library-api-roan.vercel.app/"
                    gradient="green-gradient"
                />
                <Project
                    name="NeeScan"
                    description="Template for series or manga pages."
                    gitHub="https://github.com/Exaedro/NeeScan-V3"
                    cover={project2}
                    link="https://neescan.vercel.app/"
                    gradient="red-gradient"
                />
                <Project
                    name="Von Neumann Conversor"
                    description="A conversor of von neumann instructions."
                    gitHub="https://github.com/Exaedro/VN-Architecture-Conversor"
                    cover={project3}
                    link="https://neescan.vercel.app/"
                    gradient="blue-gradient"
                />
            </section>
        </>
    );
}
