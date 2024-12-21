const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.accountType !== 'admin') {
    return res.status(403).send({ error: 'Access denied.' });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };