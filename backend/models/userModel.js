const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    firstName: {
      type: String,
      required: [true, 'Please add a firstName'],
    },
    lastName: {
        type: String,
        required: [false, 'Please add a lastName'],
      },
    email: {
        type: String,
        required: [false, 'Please add a email'],
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
