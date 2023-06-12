import { Link } from "react-router-dom"
import jacintook from "../../assets/img/jacintook.png"

const NavBar = ({categories}) => {

	const listItem = categories.map((cat) =>
		<li key={cat.id.toString()} >
			<Link to={`/productos/category/${cat.id}`} className="dropdown-item">{cat.name}</Link>	
		</li>
  	)

  return (
			<nav className="navbar navbar-expand-lg bg-warning-subtle ">

				<div className="container-fluid">
					
					<Link to="/home" className="navbar-brand">
      			<img src={jacintook} alt="Logo" width="150" height="auto" className="d-inline-block align-text-center"/>
					</Link>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">

							<li className="nav-item">
								<Link to="/home" className="nav-link active" aria-current="page">Home</Link>
							</li>

							<li className="nav-item">
								<Link to="/productos" className="nav-link">Productos</Link>
							</li>

							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Categorías
								</a>
								<ul className="dropdown-menu">{listItem}</ul>
							</li>

							<li className="nav-item">
								<Link to="/pagos" className="nav-link">Medios de pago</Link>
							</li>

							<li className="nav-item">
								<Link to="/ubicacion" className="nav-link">Ubicación</Link>
							</li>

							<li className="nav-item">
								<Link to="/contacto" className="nav-link">Contacto</Link>
							</li>

						</ul>

						<form className="d-flex" role="search">

							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
							<button className="btn btn-outline-info" type="submit">Search</button>
						
						</form>

					</div>

				</div>
				
			</nav>
  )
}

export default NavBar