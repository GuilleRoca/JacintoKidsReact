const Pagination = ({pages,actualPage}) => {

	

  return (
    <div>
      <nav>
				<ul className="pagination justify-content-end">
					<li className="page-item disabled">
						<a className="page-link">Anterior</a>
					</li>
					{paginas}
					<li className="page-item">
						<a className="page-link" href="#">Siguiente</a>
					</li>
				</ul>
			</nav>
    </div>
  )
}

export default Pagination