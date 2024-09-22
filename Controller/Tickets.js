const Ticket = require('../Models/Ticket');


const createTicket = async function (req, res) {
  const { title, description } = req.body;
  try {
    const newTicket = new Ticket({
      title,
      description,
    });
    const ticket = await newTicket.save();
    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getTickets = async function (req, res) {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getTicketById = async function (req, res) {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


const updateTicket = async function (req, res) {
  const { title, description } = req.body;
  try {
    let ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, updatedAt: Date.now() } },
      { new: true }
    );

    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteTicket = async function (req, res) {
    try {
      const ticket = await Ticket.findByIdAndDelete(req.params.id);
      
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
  
      res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
      console.error('Error while deleting ticket:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  
  

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
