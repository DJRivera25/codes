/* 1. In the activity folder, create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.

2. Actvity #1: Create a database called "business" 2 new collections in the database called sales and customers. Insert a mock data for each collection with the following properties:

- sales
    - product - string
    - category - string
    - quantity - number
    - price - number
	- date - date (Lookup the use of Date())

- customers
    - name - string
    - age - number
    - gender - string
    - region - string
 */
	async function insertSales(db){
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	}
	async function insertCustomers(db){
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	}
	
	/* 
	3. Calculate total sales revenue for each product category using $group and $sum.
	*/
	async function totalRevenue(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	};
	
	/* 
	4. Calculate quantity per sales category using $group and $sum.
	*/
	async function quantityPerSales(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	};
	
	/* 
	5. Count customers per region using $group and $count.
	*/
	async function customerPerRegion(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	};
	
	/* 
	6. Analyze customer demographics by age group using $match and $group.
	*/
	async function demographicsByAge(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	};
	
	/* 
	7. Determine average order value using $group and $avg.
		- Look up the use of $avg operator.
	*/
	async function orderAverage(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	};
	
	/* 
	8. Explore product popularity trends over time using $project, $group, and $sort.
		- Look up the use of $dateToString operator.
	*/
	async function productPopularity(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	}
	
	
	/* 
	9. Identify outliers in sales data using $project, $match, and $sort.
		- Outliers are data points that are significantly different from the rest of the data.
		- Filter sales with price greater than 1000
		- You may add another document to the sales collection to test the outlier detection.
	*/
	async function salesOutlier(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	}
	
	/* 
		10. Count the number of sales document which quantity is less than 10 using $match, $group
			- Lookup and research on the use of query operators in $match
	*/
	async function quantityLessThan3(db){
	
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	
	}
	/*
	
	11. Count the number of sales documents whose price is less than 100 using $match, $group
		- Lookup and research on the use of query operators in $match
	*/
	async function priceLessThan100(db){
	
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			
	
	
	
			
		);
	
	}

	try{
		module.exports = {
			insertSales,
			insertCustomers,
			totalRevenue,
			quantityPerSales,
			customerPerRegion,
			demographicsByAge,
			orderAverage,
			productPopularity,
			salesOutlier,
			quantityLessThan3,
			priceLessThan100
		};
	} catch(err){
	
	};
	