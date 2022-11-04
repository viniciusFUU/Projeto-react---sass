import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/SocialNetworks.sass'

const socialNetworks = [
    {
        name: "linkedin", 
        icon: <FaLinkedinIn />,
        href: "https://www.linkedin.com/in/vin%C3%ADcius-monteiro-a150981b8/"
    },
    {
        name: "github", 
        icon: <FaGithub />,
        href: "https://github.com/viniciusFUU"
    },
    {
        name: "instagram", 
        icon: <FaInstagram />,
        href: "https://www.instagram.com/vinicius3.98/"
    },
]

const SocialNetworks = () => {
    return(
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.href} className='social-btn' id={network.name} key={network.name} target="_blank">{network.icon}</a>
            ))}
        </section>
    )
}

export default SocialNetworks