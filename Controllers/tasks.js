const getAllTasks = (req,res)=>{
    res.send("get all tasks");
}

const postTask = (req,res)=>{
    res.send("post task");
}

const getTask = (req,res)=>{
    res.send("single task fetched");
}

const patchTask = (req,res)=>{
    res.send(`task with id ${req.params.id} patched`);
}

const deleteTask = (req,res)=>{
    res.send(`task with id ${req.params.id} deleted`);
}

module.exports = {getAllTasks,postTask,getTask,patchTask,deleteTask};