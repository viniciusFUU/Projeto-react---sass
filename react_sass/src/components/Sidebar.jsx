import Avatar from "../img/foto.png"

import '../styles/components/sidebar.sass'
import InformationContainer from "./InformationContainer"
import SocialNetworks from "./SocialNetworks"

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Vinicius Monteiro"/>
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download curriculo</a>
        </aside>
    )
}

export default Sidebar