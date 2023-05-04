const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')
const blogs = require('./data/blogs.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(chef => chef.id === id)
    res.send(selectedChef)
})

app.get('/chef-recipes/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)

    const selectedRecipes = recipes.filter(recipe => recipe.chef_id === id)
    res.send(selectedRecipes)
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.listen(port, () => {
    console.log(`Superior server is running on port: ${port}`)
})