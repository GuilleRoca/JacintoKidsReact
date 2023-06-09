import style from './cart.module.css'
import shopping_cart from '../../assets/img/shopping_cart.svg'

const Cart = () => {
  return (
    <div className={style.container}>

      <button type="button" className="btn btn-light mt-1	" >
        <img src={shopping_cart} className={style.cart} alt="cart"/>
        <span className="position-absolute top-0 start-90 mt-2 ms-2 translate-middle badge rounded-pill bg-danger">
          5
        	<span className="visually-hidden">unread messages</span>
        </span>
			</button>
      
    </div>   
  )
}

export default Cart