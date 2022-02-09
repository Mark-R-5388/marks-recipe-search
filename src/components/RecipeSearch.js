const RecipeSearch = (props) => {
	const { recipeList, updateRecipeList, resetRecipeSearch, hitSearch } = props;

	console.log(recipeList);
	console.log(hitSearch);

	const handleSearch = () => {
		updateRecipeList();
	};

	const resetSearch = () => {
		resetRecipeSearch();
	};

	return (
		<div className='search-bar-container'>
			<label>
				Search Here:
				<input type='text' name='searchName' />
			</label>
			{!hitSearch ? (
				<button onClick={handleSearch}>Find Recipe</button>
			) : (
				<button onClick={resetSearch}>Reset Search</button>
			)}
		</div>
	);
};

export default RecipeSearch;
