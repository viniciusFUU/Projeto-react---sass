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
    { 
        id: "html", 
        name: "HTML5", 
        icon: <DiHtml5 />,
        description: "intermediate"
    },
    { 
        id: "css", 
        name: "CSS3", 
        icon: <DiCss3 />,
        description: "intermediate",
    },
    { 
        id: "js",
        name: "JavaScrip", 
        icon: <DiJsBadge />,
        description: "intermediate"
    },
    { 
        id: "node", 
        name: "Node.js", 
        icon: <DiNodejsSmall />,        
        description: "intermediate"
    },
    { 
        id: "mysql", 
        name: "MySQL", 
        icon: <DiMysql />,
        description: "begginer"
    },
    { 
        id: "react", 
        name: "React", 
        icon: <DiReact />,
        description: "begginer"
    },
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
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnologiesContainer