const express = require('express')
const app = express()

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

// Run server
app.listen(8000, function() {
  console.log('Server is running')
})
