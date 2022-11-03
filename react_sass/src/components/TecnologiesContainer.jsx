import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
} from 'react-icons/di'

import '../styles/components/TecnologiesContainer.sass'

const tecnologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />},
    { id: "css", name: "CSS3", icon: <DiCss3 />},
    { id: "js", name: "JavaScrip", icon: <DiJsBadge />},
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
    { id: "mysql", name: "MySQL", icon: <DiMysql />},
    { id: "react", name: "React", icon: <DiReact />},
]

const TecnologiesContainer = () => {
    return (
        <section className="tecnologies-container">
            <h2>Tecnologias</h2>
            <div className="tecnologies-grid">
                {tecnologies.map((tech) => (
                    <div className="tecnology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tecnology-info">
                            <h3>{tech.name}</h3>
                            <p>O que sei sobre a tecnologia.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnologiesContainer