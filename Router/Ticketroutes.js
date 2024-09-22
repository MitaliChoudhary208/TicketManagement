const express = require('express');
const router = express.Router();
const { createTicket, getTickets, getTicketById, updateTicket, deleteTicket } = require('../Controller/Tickets');

router.post('/', createTicket);
router.get('/', getTickets);
router.get('/:id', getTicketById);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

module.exports = router;
