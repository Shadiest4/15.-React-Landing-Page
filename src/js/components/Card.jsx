const Card = ({ image, title, text }) => {
	return (
		<div className="col-12 col-md-6 col-lg-3 mb-4">
			<div className="card h-100">
				<img src={image} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;