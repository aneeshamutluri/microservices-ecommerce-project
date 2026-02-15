let products = [{ id: "1", name: "Sample Product", price: 100 }];

exports.getProducts = async (req, res) => {
    res.status(200).json(products);
};

// Get Product by ID
exports.getProductById = async (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    product ? res.json(product) : res.status(404).json({ message: "Not found" });
};

exports.createProduct = async (req, res) => {
    const newProduct = { id: Date.now().toString(), ...req.body, createdBy: req.user.id };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

// Update Product
exports.updateProduct = async (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: "Not found" });
    }
};

//  DELETE method
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== id);
    res.status(200).json({ message: "Product deleted successfully" });
};