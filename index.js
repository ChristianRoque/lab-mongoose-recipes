const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
	.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
	.then(() => {
		console.log('Connected to Mongo!');
	})
	.catch((err) => {
		console.error('Error connecting to mongo', err);
	});

let bananaPancakes = {
	title: 'BananaSplit'
};

let recipe = new Recipe(bananaPancakes);

recipe.save();

Recipe.insertMany(data);

Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 }).then('successCallback').catch('errorCallback');

Recipe.deleteOne({ title: 'Carrot Cake' }).then('successCallback').catch('errorCallback');

mongoose.connection.close();
