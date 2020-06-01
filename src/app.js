const express = require('express')
const path = require('path')
const hbs = require('hbs')

const mainRoutes = require('./routes/main-routes')

const app = express()

// Setup paths
const staticDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname,'../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')


// Setup template engine
app.set('view engine', 'hbs')
hbs.registerPartials(partialsDirectoryPath)
app.set('views', viewsDirectoryPath)

// Setup Express to use static dir
app.use(express.static(staticDirectoryPath))

// Routes
app.use(mainRoutes)

// 404
app.get('*', (req, res) => {
  res.send('Page not found')
})

app.listen(3000, () => {
  console.log('App running on port 3000')
})




