const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc    Get users
// @route   GET /api/user
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ user: req.user })

  res.status(200).json(users)
})

// @desc    Set User
// @route   POST /api/user
// @access  public
const setUser = asyncHandler(async (req, res) => {
  if (!req.body.firstName) {
    res.status(400)
    throw new Error('Please add a required fields')
  }

  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email:req.body.email
  })
  res.status(200).json(user)
})

// @desc    Update user
// @route   PUT /api/user/:id
// @access  Public
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedUser)
})

// @desc    Delete user
// @route   DELETE /api/user/:id
// @access  Public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

   await user.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser,
}
