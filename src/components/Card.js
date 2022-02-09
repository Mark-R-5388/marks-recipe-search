import image from '../images/image.jpg';

const Card = (props) => {
	console.log(props);
	const { img, alt, name, healthLabels, calories, cookTime, url } = props;
	return (
		<div className='card-container'>
			<img className='card-image' src={image} alt={alt} />
			<div className='content-container'>
				<h2>{name}</h2>
				<p>{healthLabels}</p>
				<p>{calories}</p>
				<p>{cookTime}</p>
				<p>{url}</p>
			</div>
		</div>
	);
};

export default Card;
