import style from './productItem.module.css'

const ProductItem = ({product}) => {

const {id,title, thumbnail_id, price} = product

  return (
    <div>
       <div className={style.card}>
  			<img src={"https://http2.mlstatic.com/D_NQ_NP_"+ thumbnail_id +"-O.webp"} className="card-img-top" alt={title}/>
  			<div className="card-body">
    			<h6 className="card-title">{title}</h6>
				<h5 className="text-end">$ {price}</h5>
    			<div className="d-flex justify-content-between">
						<a href="#" className="btn btn-primary">Comprar</a>
						<a href="#" className="btn btn-primary">Ver</a>
					</div>
  			</div>
			</div>
    </div>
  )
}

export default ProductItem