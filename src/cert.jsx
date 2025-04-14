import './assets/cert.css';
import GetCerts from './assets/certs.js';

function Certs(){
    return(
        <>
            <div className="containerc">
                <h1>CERITIFCATES</h1>
            <div className="certs">
                {GetCerts.map((cert, index) => (
                    <div key={index} className="certificatesimges">
                        <img 
                            src={cert.icon} 
                            alt={`${cert.name} icon`}
                        />
                    </div>
                ))}
            </div>
            </div>
            <hr />

        </>
    )
}

export default Certs