const express = require('express');
const router = express.Router();

const ctrlKanban = require('./controllers/kanban');

router.post('/addColumn', ctrlKanban.addColumn);
router.get('/getColumns', ctrlKanban.getColumns);
router.post('/addCard', ctrlKanban.addCard);
router.post('/getCards', ctrlKanban.getCards);

module.exports = router;