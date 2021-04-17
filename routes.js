const  express = require("express");
const  router = express.Router();
const  controllers = require("./controller")

router.post("/signIn",async (req,res)=> {
    controllers.createUserController(req,res)
});

router.post('/', async (req, res) => {
    controllers.loginController(req,res)
});

router.get('/user', async (req, res) => {
    controllers.profileController(req,res)
});

router.post('/task', async (req, res) => {
    controllers.createTodoController(req,res)
});

router.post('/check', async (req, res) => {
   controllers.checkLoginController(req,res)
});

router.post('/isAdmin', async (req, res) => {
    controllers.checkAdminController(req,res)
});

router.get('/TaskAdmin', async (req, res) => {
    controllers.getTaskController(req,res)
});

router.get('/TaskUser', async (req, res) => {
    controllers.getUserController(req,res)
});

router.put("/TaskUser",(req,res)=> {
    controllers.updateUserController(req,res)
});

router.delete("/TaskUser",(req,res)=> {
    controllers.deleteUserController(req,res)
});

router.get('/task', async (req, res) => {
    controllers.getTodoController(req,res)
});

router.put("/task",(req,res)=> {
    controllers.updateTodoController(req,res)
});

router.delete("/task",(req,res)=> {
    controllers.deleteTodoController(req,res)
});

module.exports = router;
