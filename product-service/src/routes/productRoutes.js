const express = require('express');
const router = express.Router();
// Link to the middleware 
const { protect, admin } = require('../middleware/authMiddleware'); 
const productController = require('../controllers/productController');

// All routes tokens
router.get('/', protect, productController.getProducts);
router.get('/:id', protect, productController.getProductById); 
router.post('/', protect, admin, productController.createProduct);
router.put('/:id', protect, productController.updateProduct);  
router.delete('/:id', protect, admin, productController.deleteProduct);

module.exports = router;