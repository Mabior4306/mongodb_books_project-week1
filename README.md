# MongoDB Books Project

## Overview
This project demonstrates MongoDB CRUD operations, advanced queries, aggregation pipelines, and indexing using a sample `books` collection.

## Folder Structure
```
mongodb_project/
│── README.md
│── insert_books.js
│── queries.js
```

## Files Description
### **insert_books.js**
Contains sample data (10+ book documents) to insert into the MongoDB `books` collection.

### **queries.js**
Contains:
- Basic CRUD operations  
- Advanced queries  
- Aggregation pipelines  
- Index creation examples  

## Requirements
- MongoDB installed
- Mongo shell or MongoDB Compass
- A running MongoDB instance

## How to Run
1. Open your terminal and connect to MongoDB:
   ```
   mongosh
   ```
2. Load the data:
   ```
   load("insert_books.js")
   ```
3. Run queries:
   ```
   load("queries.js")
   ```

## Author
Generated for assignment submission.
