const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose'); 
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://mongodb:27017/ecommerce_products')
  .then(() => console.log(' Product Service DB Connected'))
  .catch(err => console.error(' Product DB Error:', err));

const swaggerPath = path.join(__dirname, '..', 'swagger.yaml');
const swaggerDocument = yaml.load(swaggerPath);

// Swagger UI Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Product Routes
app.use('/', productRoutes);

const PORT = 5002;
app.listen(PORT, () => console.log(` Product Service running on ${PORT}`));