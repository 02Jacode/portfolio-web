import { IconHome } from '@tabler/icons-react';import { IconSettingsCheck } from '@tabler/icons-react';import { IconCertificate } from '@tabler/icons-react';import { IconPhone } from '@tabler/icons-react';import { IconX } from '@tabler/icons-react';import { IconMenu3 } from '@tabler/icons-react';import { IconAdjustmentsCog } from '@tabler/icons-react';
import './assets/header.css';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Header(){
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
    <>
        {!isMobileMenuOpen && (
        <div className="mobile-menu-button">
            <button onClick={toggleMenu}>
                <IconMenu3 stroke={3} />
            </button>
        </div>
    )}
 <div className="PageLogo">
            <h1>J.</h1>
</div>
        <div className={`menu ${isCollapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <button>
                        {isCollapsed ? <IconMenu3 stroke={2} /> : <IconX stroke={2} />}
                    </button>
                </div>
                <br />
                    <a href="#home">
                    <button><IconHome stroke={2} />
                        <span>Home</span>
                    </button>
                    </a>
                    <a href="#skill">
                    <button><IconSettingsCheck stroke={2} />
                        <span>Key Competencies</span>
                    </button>
                    </a>
                    <a href="#projects">
                    <button><IconAdjustmentsCog stroke={2} />
                        <span>Projects</span>
                    </button>
                    </a>
                    <a href="#certs">
                    <button><IconCertificate stroke={2} />
                        <span>Certificates</span>
                    </button>
                    </a>
                    <a href="#contact">
                    <button><IconPhone stroke={2} />
                        <span>Contact</span>
                    </button>
                    </a>
            </nav>
            
        </div>
    </>
    );
}

export default Header;