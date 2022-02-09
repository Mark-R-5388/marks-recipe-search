import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeSearch from './components/RecipeSearch';

import { useState } from 'react';

const App = () => {
	const [hitSearch, setHitSearch] = useState(false);

	const [recipeList, setRecipeList] = useState([]);

	const updateRecipeList = () => {
		setRecipeList((prevList) => {
			return [
				...prevList,
				{
					id: prevList.length + 1,
					img: 'image url',
					alt: 'image alt',
					name: 'recipe / label',
					healthLabels: 'health Labels',
					calories: 'total calories',
					cookTime: 'total time',
					url: 'recipe url',
				},
			];
		});
		setHitSearch(true);
	};

	const resetRecipeSearch = () => {
		setRecipeList([]);
		setHitSearch(false);
	};

	return (
		<>
			<Header />
			<RecipeSearch
				recipeList={recipeList}
				hitSearch={hitSearch}
				updateRecipeList={updateRecipeList}
				resetRecipeSearch={resetRecipeSearch}
			/>
			<RecipeList recipeList={recipeList} />
		</>
	);
};

export default App;
