const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const multer = require('multer');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' });

router.post(
  '/',
  upload.single('file'),
  [
    body('name').trim().notEmpty().escape(),
    body('email').isEmail().normalizeEmail(),
    body('whatsapp').trim().notEmpty().escape(),
    body('subject').trim().notEmpty().escape(),
    body('serviceType').trim().notEmpty().escape(),
    body('deadline').trim().notEmpty().escape(),
    body('timeZone').trim().notEmpty().escape(),
    body('description').optional().trim().escape()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const order = new Order({
        name: req.body.name,
        email: req.body.email,
        whatsapp: req.body.whatsapp,
        subject: req.body.subject,
        serviceType: req.body.serviceType,
        deadline: req.body.deadline,
        timeZone: req.body.timeZone,
        description: req.body.description,
        file: req.file ? req.file.filename : null
      });
      await order.save();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Order Received',
        text: `A new order has been submitted by ${order.name}.`
      });

      res.json({ message: 'Order received' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server Error' });
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
