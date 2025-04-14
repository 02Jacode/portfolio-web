import './assets/contact.css';
import ReactPlayer from 'react-player/youtube';

function Contact(){
    return(
        <>
            <div className="contactbody">
                <h1>Contact</h1>
            <div className="boxes">
            <div className="contactForm">
                <fieldset>
                    <legend>Contact Me</legend>
                <form>
                <span>Email Address:</span><br />
                    <input type="Email" placeholder="Enter Your Email" required/><br /><br />
                <span>Message:</span><br />
                    <textarea placeholder="What's Your Message?" required/> <br />
                <br />
                <input type="submit" className='btn-56' value="Send Message"></input>
                </form>
                </fieldset>
            </div>
            <div className="IntroVid">
                <ReactPlayer
                    alt="My Video Introduction"
                     url="https://www.youtube.com/watch?v=wexzvClUcUk"
                     controls
                     width="150%"
                     height="100%"
                 />
            </div>
            </div>
            </div>
        </>
    )
}

export default Contact