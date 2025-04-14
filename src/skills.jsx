import './assets/Skills.css'; 
import skillsIcon from './assets/skillsIcon.js';

function Skills(){
    return(
        <>
        <div className="containers">
            <h1>SKILLS</h1>
            <div className="Skillset">
                <div className="frontend">
                <fieldset>
                <legend>Front-End</legend>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Photshop</li>
                    <li>Figma</li>
                    <li></li>
                    <li></li>


                </ul>
                </fieldset>
                </div>

                <div className="backend">
                <fieldset>
                <legend>Back-End</legend>
                <ul>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
                </fieldset>
                </div>

                <div className="others">
                <fieldset>
                <legend>Others</legend>
                <ul>
                    <li>Visual Studio</li>
                    <li>Git Bash</li>
                    <li>Microsoft Offices</li>
                    <li>Php MyAdmin</li>
                    <li>Filmora</li>
                    <li>Canva</li>
                    <li>OBS Studio</li>
                    <li></li>
                    <li></li>

                </ul>
                </fieldset>
                </div>

                
                <div className="tools">
                <fieldset>
                <legend>Tools/Tech Encountered</legend>
                <ul>
                    <li>Cisco</li>
                    <li>AWS</li>
                    <li>JAVA</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Apache Cordova</li>
                    <li>Blender</li>
                    <li>Adobe Animate</li>
                </ul>
                </fieldset>
                </div>
            </div>
            <div className="icons">
                {skillsIcon.map((icon, index) => (
                    <div key={index} className="footer-icon">
                        <img 
                            src={icon.icon} 
                            alt={`${icon.name} icon`}
                        />
                    </div>
                ))}
            </div>
        </div>
                    <hr />

        </>
    );
}

export default Skills