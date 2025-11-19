// BASIC CRUD QUERIES

// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2015 } });

// 3. Find books by a specific author
db.books.find({ author: "John Mason" });

// 4. Update price of a specific book
db.books.updateOne(
  { title: "Deep Space" },
  { $set: { price: 25.00 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "Desert Storms" });


// ADVANCED QUERIES

// Books in stock & published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// Projection: title, author, price
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 });

// Sort by price ascending
db.books.find().sort({ price: 1 });

// Sort by price descending
db.books.find().sort({ price: -1 });

// Pagination: 5 books per page
db.books.find().skip(0).limit(5); // Page 1
db.books.find().skip(5).limit(5); // Page 2


// AGGREGATION PIPELINES

// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", average_price: { $avg: "$price" } } }
]);

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", total_books: { $sum: 1 } } },
  { $sort: { total_books: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { decade: { $floor: { $divide: ["$published_year", 10] } } },
      count: { $sum: 1 }
    }
  }
]);


// INDEXING

// Index on title
db.books.createIndex({ title: 1 });

// Compound index on author + year
db.books.createIndex({ author: 1, published_year: -1 });

// Check performance
db.books.find({ title: "Deep Space" }).explain("executionStats");
db.books.find({ author: "John Mason" }).explain("executionStats");
