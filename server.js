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

// Run server
app.listen(function() {
  console.log('Server is running')
})
