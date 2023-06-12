import { useEffect, useState } from 'react'
import Cart from '../Cart'
import style from './headerLogin.module.scss'
import sol from "../../assets/img/sol.png"
import pelotaDePlaya from "../../assets/img/pelota-de-playa.png"
import promocion from "../../assets/img/promocion.png"
import nieve from "../../assets/img/nieve.png"
import muneco from "../../assets/img/muneco.png"
import { Link } from 'react-router-dom'



const HeaderLogin = () => {
  
  

  return (

		<div className={style.container}>

    	<div className="me-2">
        <Link to="/login" className="login_action text-decoration-none text-black me-3">Iniciar sesión</Link>
        <Link to="/registrar" className="create_action text-decoration-none text-black">Crear cuenta</Link>
    	</div>

    	<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className={style.slider}>
            <div className={style.slideTrack}>

              <div className={style.slide}>
                <p className="m-0 p-0 align-middle">Hasta 40% de descuento en la temporada Spring-Summer !!  <img src={sol} alt="sol" className={style.img}/>  <img src={pelotaDePlaya} alt="pelota" className={style.img}/></p>
              </div>

              <div className={style.slide}>
                <p className="m-0 p-0 align-middle">3 y 6 cuotas sin interes con todas las tarjetas de crédito !!  <img src={promocion} alt="promo" className={style.img}/></p>
              </div>

              <div className={style.slide}>
                <p className="m-0 p-0 align-middle">Nueva temporada otoño-invierno !!  <img src={nieve} alt="nieve" className={style.img}/>  <img src={muneco} alt="muñeco de nieve" className={style.img}/></p>
              </div>
              
            </div>
          </div>

        </div>
    	</div>
		
				<Cart/>

		</div>
  )
}

export default HeaderLogin