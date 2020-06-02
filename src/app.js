const express = require('express')
const path = require('path')
const hbs = require('hbs')

const mainRoutes = require('./routes/main-routes')

const app = express()

const port = process.env.PORT || 3000

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

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})




