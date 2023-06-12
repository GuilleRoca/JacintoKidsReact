import { Link } from 'react-router-dom'
import style from './footer.module.css'
import instagram from '../../assets/img/instagram.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import whatsappBig from '../../assets/img/whatsapp.png'
import youtube from '../../assets/img/youtube.svg'
import twitter from '../../assets/img/twitter.svg'
import logogr from '../../assets/img/logogr.jpg'
import github from '../../assets/img/github.png'
import linkedin from '../../assets/img/linkedin.svg'


const Footer = () => {
  return (
    <>
			<footer className="bg-warning-subtle text-center text-lg-start" >
				<div className="d-flex">

				
          <div className="d-flex flex-column flex-fill mb-3 text-center">

            <h3>INFO</h3>
            <div><Link to="./terminos">Terminos y condiciones</Link></div>
            <div><Link to="./cambios">Politicas de cambios</Link></div>
            <div><Link to="./arrepentimiento">Politicas de arrepentimiento</Link></div>

          </div>
          
          <div className="d-flex flex-column flex-fill mb-3 text-center">

            <h3>MENU</h3>
            <div><Link to="./home">Inicio</Link></div>
            <div><Link to="./productos">Productos</Link></div>
            <div><Link to="./pagos">Medios de pago</Link></div>
            <div><Link to="./ubicacion">Ubicación</Link></div>
            <div><Link to="./contacto">Contacto</Link></div>

          </div>
          
          <div className="d-flex flex-column flex-fill mb-3 text-center">

            <h3>REDES</h3>
            <div><Link to ="https://www.instagram.com/"><img src={instagram} alt="instagram" className={style.redes}/> Instagram</Link></div>
            <div><Link to ="https://web.whatsapp.com/"><img src={whatsapp} alt="whatsapp" className={style.redes}/> Whatsapp</Link></div>
            <div><Link to ="https://youtube.com.ar"><img src={youtube} alt="yootube" className={style.redes}/>YouTube</Link></div>
            <div><Link to ="https://twitter.com/"><img src={twitter} alt="twitter" className={style.redes}/> Twitter</Link></div>
            
          </div>

				</div>
        
        <Link to="https://web.whatsapp.com/" className={style.contactoWa}>
          <div>
            <img src={whatsappBig} alt="wa"/>
          </div>
        </Link>
        
				<div className="text-center" >
            <p className="designer">WEB Designer   <img src={logogr} alt="Logo GR" className={style.redes}/>   Guillermo Rocatti       <Link to="https://github.com/GuilleRoca"><img src={github} alt="github" className={style.redes} /></Link> <Link to="https://www.linkedin.com/in/guillermo-angel-rocatti/"><img src={linkedin} alt="linkedin" className={style.redes}/></Link></p>
        </div>
			</footer>
    </>
  )
}

export default Footer