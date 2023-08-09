const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const {
	allVictims,
	addVictim,
	removeVictim,
	victim,
	editVictim,
} = require('../controllers/victims');

/* /api/victims/. */
router.get('/', auth, allVictims);

/* /api/victims/:id. */
router.get('/:id', auth, victim);

/* /api/victims/add. */
router.post('/add', auth, addVictim);

/* /api/victims/remove/:id. */
router.post('/remove/:id', auth, removeVictim);

/* /api/victims/edit/:id. */
router.put('/edit/:id', auth, editVictim);

module.exports = router;
