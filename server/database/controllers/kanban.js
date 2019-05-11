const mongoose = require('mongoose');

module.exports.addColumn = function (req, res, next) {
    const Model = mongoose.model('kanban');

    let column = new Model ({
        column: req.body.column
    })

    column
        .save()
        .then( result => {
            res.redirect('/');
        })
} 

module.exports.getColumns = (req, res) => {
    const Model = mongoose.model('kanban');
  
    Model
        .find()
        .then(items => {
            res.status(200).json(items);
        });
};

module.exports.addCard = function (req, res, next) {
    const Model = mongoose.model('kanban');

    Model
        .findOneAndUpdate(
            { _id: req.body.columnID },
            { $push: { cards: req.body.card } }
        )
        .then( result => {
            res.redirect('/');
        })
}

module.exports.getCards = (req, res) => {
    const Model = mongoose.model('kanban');

    Model
        .findOne({ _id: req.body.columnID })
        .then(item => { 
            if (item) {
                res.status(200).json(item.cards);
            } else {
                res.status(404).json();
            }
        });
};