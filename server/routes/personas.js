const express = require('express');
const router = express.Router();
const mongoose  = require('mongoose');
const Persona = require('../models/persona')

// const MONGODB_HOST = 'localhost'
// const MONGODB_PORT = '27017'
const MONGODB_HOST = 'tech-lead:tech-lead-123@ds263048.mlab.com'
const MONGODB_PORT = '63048'
const MONGODB_NAME = 'tech-lead'

mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`)
  .then(() => {
    console.log(`Connected to MongoDB ${MONGODB_NAME} on ${MONGODB_HOST}:${MONGODB_PORT} `);
  })
  .catch(err => console.error(err));

// Get all personas
router.get('/', async (req, res) => {
  try {
    const personas = await Persona.find()
    if (personas)
      res.json({ success: true, value: personas });
    else
      res.json({ success: false, message: 'NO se encuentran personas.' });
  } catch (error) {
    res.json({ success: false, message: error })
  }
});

// Get a single person
router.get('/:id', async (req, res) => {
  if (!req.params.id)
    res.json({ success: false, message: 'ID no fue provisto.' }); // Return error message
  try {
    const persona = await Persona.findOne({ _id: req.params.id })
    if (persona)
      res.json({ success: true, value: persona });
    else
      res.json({ success: false, message: 'NO se encuentra persona' });
  } catch (error) {
    res.json({ success: false, message: error })
  }
});

// Save a persona
router.post('/', (req, res) => {
  if (!req.body.rut)
    res.json({ success: false, message: 'Debe proporcionar un rut válida' }); // Return error
  else if (!req.body.name)
    res.json({ success: false, message: 'Debe proporcionar nombre' }); // Return error
  else if (!req.body.last_name)
    res.json({ success: false, message: 'Debe proporcionar apellido' }); // Return error
  else if (!req.body.age)
    res.json({ success: false, message: 'Debe proporcionar edad' }); // Return error
  else if (!req.body.address)
    res.json({ success: false, message: 'Debe proporcionar dirección' }); // Return error
  else {
    const persona = new Persona({
      rut: req.body.rut,
      name: req.body.name,
      last_name: req.body.last_name,
      age: req.body.age,
      address: req.body.address,
    })
    // Save tarea to database
    persona.save((err) => {
      // Check if error occured
      if (err)
        res.json({ success: false, message: 'NO se pudo guardar persona' });
      else {
        res.json({ success: true, value: persona });
      }
    })
  }
});

// Update a single person
router.put('/:id', async (req, res) => {
  if (!req.params.id)
    res.json({ success: false, message: 'ID no fue provisto.' }); // Return error message
  try {
    const persona = await Persona.updateOne({ _id: req.params.id }, req.body)
    if (persona)
      res.json({ success: true, value: persona });
    else
      res.json({ success: false, message: 'NO se pudo modificar persona' });
  } catch (error) {
    res.json({ success: false, message: error })
  }
});

// Update a single person
router.delete('/:id', async (req, res) => {
  if (!req.params.id)
    res.json({ success: false, message: 'ID no fue provisto.' }); // Return error message
  try {
    const persona = await Persona.findOne({ _id: req.params.id })
    if (persona) {
      const deleteRes = await Persona.deleteOne({ _id: req.params.id })
      if (deleteRes)
        res.json({ success: true, message: `Persona eliminada: ${persona.name} ${persona.last_name}, id: ${persona._id}`, value: persona });
      else
        res.json({ success: false, message: 'NO se pudo eliminar persona' });
    } else
      res.json({ success: false, message: 'NO se encuentra persona' });
  } catch (error) {
    res.json({ success: false, message: error })
  }
});

module.exports = router;
