const createUserController = require("./createUserController")
const loginController = require("./loginController")
const profileController = require("./profileController") 
const createTodoController = require("./createTodoController")
const getTodoController = require("./getTodoController")
const deleteTodoController = require("./deleteTodoController")
const updateTodoController = require("./updateTodoController")
const checkLoginController = require("./checkLoginController")
const checkAdminController = require("./checkAdminController")
const getTaskController = require("./getTaskController")
const getUserController = require("./getUserController")
const updateUserController = require("./updateUserController")
const deleteUserController = require("./deleteUserController")

module.exports={
    createUserController,
    loginController,
    profileController,
    createTodoController,
    getTodoController,
    deleteTodoController,
    updateTodoController,
    checkLoginController,
    checkAdminController,
    getTaskController,
    getUserController,
    updateUserController,
    deleteUserController,
    
}