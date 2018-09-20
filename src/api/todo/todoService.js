const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
//on update it is going to run validation and will return the updated record
Todo.updateOptions( { new: true, runValidators: true } )

module.exports = Todo
