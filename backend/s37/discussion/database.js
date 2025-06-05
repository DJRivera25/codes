db.fruits.insertMany([
	{
		name: "Apple",
		color: "Red",
		stock: 20,
		price: 40,
		supplier_id: 1,
		onSale: true,
		origin: ["Philippines", "US"]
	},

	{
		name: "Banana",
		color: "Yellow",
		stock: 15,
		price: 20,
		supplier_id: 2,
		onSale: true,
		origin: ["Philippines", "Ecuador"]
	},

	{
		name: "Kiwi",
		color: "Green",
		stock: 25,
		price: 50,
		supplier_id: 1
		onSale: true,
		origin: ["US", "China"]
	},

	{
		name: "Mango",
		color: "Yellow",
		stock: 10,
		price: 120,
		supplier_id: 2,
		onSale: false,
		origin: ["Philippines", "India"]
	}

])
