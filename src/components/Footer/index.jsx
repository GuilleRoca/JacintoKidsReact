import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <>
			<footer className="bg-warning-subtle text-center text-lg-start" >
				<div className="d-flex">

				
				<div className="d-flex flex-column flex-fill mb-3 text-center">
          <h3>INFO</h3>
          <div><a href="./termycond.html">Terminos y condiciones</a></div>
          <div><a href="./cambios.html">Politicas de cambios</a></div>
          <div><a href="./arrepentimiento.html">Boton de arrepentimiento</a></div>
        </div>
        
				<div className="d-flex flex-column flex-fill mb-3 text-center">
          <h3>MENU</h3>
          <div><a href="../index.html">Inicio</a></div>
          <div><a href="./productos.html">Productos</a></div>
          <div><a href="./mpagos.html">Medios de pago</a></div>
          <div><a href="./ubicacion.html">Ubicación</a></div>
          <div><a href="./contacto.html">Contacto</a></div>
        </div>
        
				<div className="d-flex flex-column flex-fill mb-3 text-center">
          <h3>REDES</h3>
          <div><a href="https://www.instagram.com/"><img src="./instagram.svg" alt="instagram" className={style.redes}/> Instagram</a></div>
        	<div><a href="https://web.whatsapp.com/"><img src="./whatsapp.svg" alt="whatsapp" className={style.redes}/> Whatsapp</a></div>
          <div><a href="https://youtube.com.ar"><img src="./youtube.svg" alt="yootube" className={style.redes}/>YouTube</a></div>
          <div><a href="https://twitter.com/"><img src="./twitter.svg" alt="twitter" className={style.redes}/> Twitter</a></div>
        </div>
				</div>
        
				<a className={style.contactoWa} href="https://web.whatsapp.com/">
          <div>
            <img src="./whatsapp.png" alt="wa"/>
          </div>
        </a>
        
				<div className="text-center" >
            <p className="designer">WEB Designer   <img src="../logogr.JPG" alt="Logo GR" className={style.redes}/>   Guillermo Rocatti      <a href="https://github.com/GuilleRoca"><img src="./github.png" alt="github" className={style.redes} /></a> <a href="https://www.linkedin.com/in/guillermo-angel-rocatti/"><img src="./linkedin.svg" alt="linkedin" className={style.redes}/></a></p>
        </div>
			</footer>
    </>
  )
}

export default Footer