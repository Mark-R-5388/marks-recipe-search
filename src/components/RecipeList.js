import Card from './Card';

const RecipeList = (props) => {
	let { recipeList } = props;
	console.log(recipeList);
	return (
		<div className='recipes-container'>
			{recipeList.map((recipe) => (
				<Card
					key={recipe.id}
					img={recipe.img}
					alt={recipe.alt}
					name={recipe.name}
					healthLabels={recipe.healthLabels}
					calories={recipe.calories}
					cookTime={recipe.cookTime}
					url={recipe.url}
				/>
			))}
		</div>
	);
};

export default RecipeList;
