 const { MongoClient, ObjectId } = require('mongodb');

async function run() {
  const client = new MongoClient('mongodb+srv://djrrivera25:admin1234@wdc028-course-booking.xw36oan.mongodb.net/');

  try {
    await client.connect();
    const db = client.db('course_booking');
    const users = db.collection('users');

    // 🔄 Update operation
    const result = await users.updateOne(
      { _id: new ObjectId("64f7a3a2bc1234567890abcd") },
      { $set: { name: "Alice" } }
    );

    console.log("Update result:", result);
  } finally {
    await client.close();
  }
}

run().catch(console.error);