import Cart from '../Cart'
import style from './headerLogin.module.css'

const HeaderLogin = () => {
  return (

		<div className={style.container}>

    	<div className="me-2">
        <a href="#" className="login_action text-decoration-none text-black me-3">Iniciar sesión</a>
        <a href="#" className="create_action text-decoration-none text-black">Crear cuenta</a>
    	</div>

    	<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <p className="m-0 p-0 align-middle">Nueva temporada Spring-Summer !! <img src="./sol.png" alt="sol" className={style.img}/><img src="./pelota-de-playa.png" alt="pelota" className={style.img}/></p>
          </div>

          <div className="carousel-item">
            <p className="m-0 p-0 align-middle">3 y 6 cuotas sin interes con todas las tarjetas de crédito!!<img src="./promocion.png" alt="promo" className={style.img}/></p>
          </div>

          <div className="carousel-item">
            <p className="m-0 p-0 align-middle">Hasta 40% de descuento en la temporada otoño-invierno!!<img src="./nieve.png" alt="nieve" className={style.img}/><img src="./muneca.png" alt="muñeco de nieve" className={style.img}/></p>
          </div>

        </div>
    	</div>
		
				<Cart/>

		</div>
  )
}

export default HeaderLogin