import TwinsTech from "../assets/images/twinstech.png";
import Nakshi from "../assets/images/nakshi.jpg";
import School360 from "../assets/images/school360_logo.png";
import NeuronEducare from "../assets/images/neuroneducare.jpg";
import Gin from "../assets/images/gin.png";
import PYF from "../assets/images/pyf.png";
import Innodlab from "../assets/images/innodlab.png";
import TradeTree from "../assets/images/tradetree.png";
import JamalpurBazar from "../assets/images/jamalpurbajar.png";

const Portfolio=()=>{
    return (
        <div>
        <a href="http://innodlab.com/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={Innodlab} alt="innodlab"/>
          </div>
          <div className="project-description">
            <h1>Innodlab</h1>
            <h2>Web - March 2021</h2>
            <p className="p-sm">Building a hub to connect the designer across the country.</p>
          </div>
        </section>
      </a>
      <a href="http://pyfbd.com/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={PYF} alt="pyf" />
          </div>
          <div className="project-description">
            <h1>Pick Your Favourite</h1>
            <h2>Web — Jan 2021</h2>
            <p className="p-sm">Developed an e-commerce solution for pyfbd.com.bd.
            </p>
          </div>
        </section>
      </a>
      <a href="/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={Gin} alt="Gin Management" />
          </div>
          <div className="project-description">
            <h1>Gin Management</h1>
            
            <p className="p-sm">A Retail management software for retailer.</p>
          </div>
        </section>
      </a>
      <a href="http://tradetree.co.nz/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={TradeTree} alt="tradetree" />
          </div>
          <div className="project-description">
            <h1>Trade Tree</h1>
            
            <p className="p-sm">Developed and Upgraded the system with multi-user authentication.</p>
          </div>
        </section>
      </a>
      <a href="http://neuroneducare.co.uk/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={NeuronEducare} alt="neuroneducare" />
          </div>
          <div className="project-description">
            <h1>Nurone Educare</h1>
            
            <p className="p-sm">Upgraded the system with tons of new feature.</p>
          </div>
        </section>
      </a>
      <a href="https://school360.com.bd/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={School360} alt="school360" />
          </div>
          <div className="project-description">
            <h1>School 360</h1>
            
            <p className="p-sm">Designed and developed Madrasha-Board section.
            </p>
          </div>
        </section>
      </a>
      <a href="https://nakshipalli.com/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={Nakshi} alt="nakshipalli" />
          </div>
          <div className="project-description">
            <h1>Nakshi Palli </h1>
            
            <p className="p-sm">Designed and developed multi-vendor E-commerce for Nakshi Palli
            </p>
          </div>
        </section>
      </a>
      <a href="http://jamalpurbajar.com/" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={JamalpurBazar} alt="jamalpurbajar"  />
          </div>
          <div className="project-description">
            <h1>Jamalpur Bajar </h1>
            
            <p className="p-sm">Designed and developed signle-vendor E-commerce for Jamalpur Bajar.
            </p>
          </div>
        </section>
      </a>
      <a href="https://www.twinstechbd.com" target="__blank">
        <section className="project">
          <div className="project-icon">
            <img src={TwinsTech} alt="twinstech" />
          </div>
          <div className="project-description">
            <h1>TwinsTech</h1>
            
            <p className="p-sm">Designed and developed company profile management website.
            </p>
          </div>
        </section>
      </a>
      </div>
    )
}

export default Portfolio;