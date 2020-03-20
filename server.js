const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Use Body Parser
app.use(bodyParser.json())

// Mock data
const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }]

// Get /users
app.get('/users', function(req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

// Get /users/id
app.get('/users/:id', function(req, res) {
  console.log(req)

  res.json({
    success: true,
    message: 'Got one user',
    users: req.params.id
  })
})

// POST request to a login endpoint, like if the user is trying to log in
app.post('/login', function(req, res) {
  // Typically passwords are encrypted using something like bcrypt before sending to database
  const username = req.body.username
  const password = req.body.password

  // This should come from the database
  const mockUsername = 'Batman'
  const mockPassword = 'superSecret'

  if (username === mockUsername && password === mockPassword) {
    // In practice, use JSON web token sign method here to make an encrypted token
    res.json({
      success: true,
      message: 'Logged successfully',
      token: 'Encrypted token here'
    })
  } else {
    res.json({
      success: false,
      message: 'Username and password do not match'
    })
  }
})

// Run server
app.listen(8000, function() {
  console.log('Server is running')
})
