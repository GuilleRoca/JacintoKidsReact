import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../Spinner'
import style from './itemListContainer.module.css'
import ProductItem from '../ProductItem'


const ItemListContainer = () => {

  const [producto, setProducto] = useState([])
  const [pagins, setPagins] = useState([])
  const [loading, setLoading] = useState(true)
  const {cat} = useParams()
  const [count, setCount] = useState(1)


  const URL_API = cat===undefined ? `https://api.mercadolibre.com/sites/MLA/search?seller_id=138745311&offset=${(count-1)*50}` : `https://api.mercadolibre.com/sites/MLA/search?seller_id=138745311&category=${cat}&offset=${(count-1)*50}`

  const getProducto = async () => {
    const {data} = await axios.get(URL_API)
    setProducto(data.results)
     setPagins(data.paging) 
    setLoading(false)
  }
  useEffect(() => {
     setCount( count > Math.ceil(pagins.total/pagins.limit) ? 1 : count)
    getProducto()
  },[cat, count])

  const paginas = () => {
    return <nav className={style.containerPag} >
            <ul className="pagination justify-content-center">
              
              <li className="page-item">
                <button className="page-link"  >Previous</button>
              </li>

              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">2</a>
              </li>

              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>

            </ul>
          </nav>
        } 

  if (loading) { return <div className={style.container}><Spinner/></div>}

  return (
    <div className={style.container}>
     {paginas()}
      <div className={style.containerFlex}>
        <div className="d-flex justify-content-center row row-cols-5">
          {producto.map((product) =>( 
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer