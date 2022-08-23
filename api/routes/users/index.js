const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { PrismaClient } = require('@prisma/client');

const User = require('../../model/users')

const prisma = new PrismaClient();


router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany({});
    res.send(users)
  } catch(e) {
    console.error(e)
    res.status(500).send({ error: "Soemthing wen wrong" });
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: parseInt(req.params.id) } });
    if (!user) {
      res.status(404).send({ error: 'User not found!' })
      return;
    }
    res.send(user)
  } catch(e) {
    console.error(e)
    res.status(500).send({ error: "Soemthing wen wrong" });
  }
})

router.post('/', async (req, res) => {
  try {
    Joi.assert(req.body, User);
  } catch(e) {
    res.status(401).send({ error: e.message });
    return;
  }

  try {
    const result = await prisma.user.create({ data: req.body });
    res.send(result)
  } catch(e) {
    console.error(e)
    res.status(500).send({ error: "Soemthing wen wrong" });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const result = await prisma.user.update({ where: { id: parseInt(req.params.id) },  data: req.body });
    res.send(result)
  } catch(e) {
    console.error(e)
    res.status(500).send({ error: "Soemthing wen wrong" });
  }
})

module.exports = router;