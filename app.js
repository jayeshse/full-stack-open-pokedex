import express from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT,'0.0.0.0', () => {
  console.log(`server started on port ${PORT}`)// eslint-disable-line no-console
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})