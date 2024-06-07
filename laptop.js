const express = require('express');
const cors = require('cors');
const app = express();
const port = 4500;

const laptops = {
    L101: { brand: 'Apple', model: 'MacBook Pro', year: 2023, specs: '16GB RAM, 512GB SSD, M1 Pro chip', detail: "detail" },
    L102: { brand: 'Dell', model: 'XPS 15', year: 2024, specs: '32GB RAM, 1TB SSD, Intel Core i9', detail: "detail" },
    L103: { brand: 'HP', model: 'Spectre x360', year: 2023, specs: '16GB RAM, 1TB SSD, Intel Core i7', detail: "detail" },
    L104: { brand: 'Lenovo', model: 'ThinkPad X1 Carbon', year: 2024, specs: '16GB RAM, 512GB SSD, Intel Core i5', detail: "detail" },
    L105: { brand: 'Asus', model: 'ROG Zephyrus G14', year: 2023, specs: '32GB RAM, 1TB SSD, AMD Ryzen 9', detail: "detail" },
    L106: { brand: 'Microsoft', model: 'Surface Laptop 4', year: 2024, specs: '16GB RAM, 512GB SSD, AMD Ryzen 7', detail: "detail" }
};

app.use(cors());

app.get('/api/laptops', (req, res) => {
    res.json(laptops);
});

app.get('/api/get-laptop', (req, res) => {
    const id = req.query.id ? req.query.id.toUpperCase() : null;
    if (id && laptops[id]) {
        res.json(laptops[id]);
    } else {
        res.status(404).json({ error: 'Laptop not found' });
    }
});

app.listen(port, () => {
    console.log(`Laptop API listening at http://localhost:${port}`);
});
