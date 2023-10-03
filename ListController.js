const ListModel = require('./ListModel');

module.exports.getTask = async (req, res) => {
    const task = await ListModel.find();
    res.send(task); 
};

module.exports.postTask = async (req, res) => {
    const { taskName } = req.body;

    ListModel.create({ taskName })
    .then( data => {
        console.log('Task was added');
        res.send(data);
    });
};

module.exports.deleteTask = async (req, res) => {
    const { _id } = req.body;
    
    ListModel.findByIdAndDelete(_id)
    .then( () => res.send('Task was deleted'));
};

module.exports.editTask = async (req, res) => {
    const { _id, taskName } = req.body;

    ListModel.findByIdAndUpdate(_id, { taskName })
    .then( () => res.send('Task was edited'));
};