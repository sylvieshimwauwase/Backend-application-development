const express = require('express');
const app = express();
const port = 3000; // You can change this to any available port you prefer
// Middleware to parse JSON requests
app.use(express.json());
// Dummy data (for demonstration purposes)
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
// Define endpoints and HTTP methods
// Create a new item (POST)
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});
// Get all items (GET)
app.get('/items', (req, res) => {
  res.json(items);
});
// Get a specific item by ID (GET)
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);
  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    res.json(item);
  }
});
// Update an item by ID (PUT)
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    items[itemIndex] = { ...items[itemIndex], ...updatedItem };
    res.json(items[itemIndex]);
  }
});
// Delete an item by ID (DELETE)
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    const deletedItem = items.splice(itemIndex, 1)[0];
    res.json(deletedItem);
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
