// [Section] MongoDB Aggregation
/*
  - Used to generate manipulated data and perform operations to create filtered results that helps in analyzing data
  - Compared to doing CRUD operations on our data from previous sessions, aggregation gives us access to manipulate, filter and compute for results providing us with information to make necessary development decisions without having to create a frontend application.
*/

// aggregate() method follows the aggregation pipelines which are steps/stages that we follow to get computed results
db.fruits.aggregate([
  // $match - used to match or get documents that satisfies the condition. This is very similar to find(). You can use query operators to make our search criteria more flexible
  /*
    $match: fruits: onSale: true

    1. Apple - onSale: true
    2. Banana - onSale: true
    3. Kiwi - onSale: true
    4. Mango - onSale: false

    $match -> Apple, Banana, Kiwi
  */
  { $match: { onSale: true }},
  // $group - allows us to group together documents and create an analysis out of the grouped elements
  /*
    $group: {
      _id: 
      total:
    }

    1. Apple - supplier_id: 1
    2. Banana - supplier_id: 2
    3. Kiwi - suuplier_id: 1

    _id: 1

    total: sum of stocks of fruits whose supplier_id is 1
    total: Apple stocks + Kiwi stocks
    total: 20           + 25
    total: 45

    {
      _id: 1,
      total: 45
    }

    _id: 2

    total: sum of stocks of fruits whose supplier_id is 2
    total: Banana stocks
    total: 15

    {
      _id: 2,
      total: 15
    }
  */
  // a string with a dollarsign inside refers to a field
  // $sum - used to add or total the values of a group of documents
  { $group: { _id: "$supplier_id", total: { $sum: "$stock" }}}
]);

// Field Projection with Aggregation
db.fruits.aggregate([
  { $match: { onSale: true}},
  { $group: { _id: "$supplier_id", total: { $sum: "$stock" }}},
  // $project - can be used to include/exclude fields from the returned data
  /*
    {
      _id: 1,
      total: 45
    }
    {
      _id: 2,
      total: 15
    }

    {
      total: 15
    }
    {
      total: 45
    }
  */
  { $project: { _id: 0 }}
]);

// Sorting Aggregated Result
db.fruits.aggregate([
  { $match: { onSale: true }},
  { $group: { _id: "$supplier_id", total: { $sum: "$stock" }}},
  // $sort - can be used to change the order of the aggregated results
  //  providing a value of -1 will sort the aggregated result in a reverse order
  { $sort: { total: -1 }}
]);

// Mini Activity
// Group fruits onSale by their color and display the stocks of each group in an ascending order


db.fruits.aggregate([
  // $unwind - deconstructs an array from a collection to output a result for each element
  /*
    $unwind: $origin

    1. Apple - origin: (2)
    2. Banana - origin: (2)
    3. Kiwi - origin: (2)
    4. Mango - origin: (2)

    {
      _id: 67e49b3345b1342e82524d83,
      name: "Apple",
      color: "Red",
      stock: 20,
      price: 40,
      supplier_id: 1,
      onSale: true,
      origin: "Philippines"
    }
    {
      _id: 67e49b3345b1342e82524d83,
      name: "Apple",
      color: "Red",
      stock: 20,
      price: 40,
      supplier_id: 1,
      onSale: true,
      origin: "US"
    }
    {
      _id: 67e49b3345b1342e82524d84,
      name : "Banana",
      color : "Yellow",
      stock : 15,
      price: 20,
      supplier_id : 2,
      onSale : true,
      origin: "Philippines"
    }
    {
      _id: 67e49b3345b1342e82524d84,
      name : "Banana",
      color : "Yellow",
      stock : 15,
      price: 20,
      supplier_id : 2,
      onSale : true,
      origin: "Ecuador"
    }
    {
      _id: 67e49b3345b1342e82524d85,
      name : "Kiwi",
      color : "Green",
      stock : 25,
      price: 50,
      supplier_id : 1,
      onSale : true,
      origin: "US"
    }
    {
      _id: 67e49b3345b1342e82524d85,
      name : "Kiwi",
      color : "Green",
      stock : 25,
      price: 50,
      supplier_id : 1,
      onSale : true,
      origin: "China"
    }
    {
      _id: 67e49b3345b1342e82524d86,
      name : "Mango",
      color : "Yellow",
      stock : 10,
      price: 120,
      supplier_id : 2,
      onSale : false,
      origin: "Philippines"
    }
    {
      _id: 67e49b3345b1342e82524d86,
      name : "Mango",
      color : "Yellow",
      stock : 10,
      price: 120,
      supplier_id : 2,
      onSale : false,
      origin: "India"
    }
  */
  { $unwind: "$origin" },
  /*
    1. Apple - origin: PH
    2. Apple - origin: US
    3. Banana - origin: PH
    4. Banana - origin: Ecuador
    5. Kiwi - origin: US
    6. Kiwi - origin: China
    7. Mango - origin: PH
    8. Mango - origin: India

    _id: Philippines
    
    kinds: Sum of fruits that have the origin "Philippines"
    kinds: Apple + Banana + Mango
    kinds: 1     + 1      + 1
    kinds: 3

    {
      _id: "Philippines",
      kinds: 3
    }

    _id: US

    kinds: Sum of fruits that have the origin "US"
    kinds: Apple + Kiwi
    kinds: 1     + 1
    kinds: 2

    {
      _id: "US",
      kinds: 2
    }

    _id: Ecuador
    _id: China
    _id: India
  */
  { $group: { _id: "$origin", kinds: { $sum: 1 }}}
]);