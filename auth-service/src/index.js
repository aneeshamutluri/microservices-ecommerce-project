const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

process.env.JWT_SECRET = 'your_super_secret_key';

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
mongoose.connect(process.env.MONGO_URI || 'mongodb://mongodb:27017/ecommerce_auth')
  .then(() => console.log(' Auth Service DB Connected'))
  .catch(err => console.error(' Auth DB Error:', err));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', authRoutes); 

app.listen(5001, () => console.log(' Auth Service running on port 5001'));