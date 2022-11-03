import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/InformationContainer.sass'

const InformationContainer = () => {
    return (
        <section id='information'>
            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>(12)98171-5683</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>E-Mail</h3>
                    <p>vinicius3_1998@hotmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p>São José dos Campos/SP</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer