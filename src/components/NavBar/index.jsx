const NavBar = ({categories}) => {

	const listItem = categories.map((cat) =>
		<li key={cat.id.toString()} ><a className="dropdown-item" href={`/productos/category/${cat.id}`}>{cat.name}</a></li>
  	)

  return (
			<nav className="navbar navbar-expand-lg bg-warning-subtle ">
				<div className="container-fluid">
					<a className="navbar-brand" href="/home">
      			<img src="./jacitook.png " alt="Logo" width="150" height="auto" className="d-inline-block align-text-center"/>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/home">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/productos">Productos</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Categorías
								</a>
								<ul className="dropdown-menu">{listItem}</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/contacto">Contacto</a>
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