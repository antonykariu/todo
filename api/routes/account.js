const express = require('express');
// ROUTER
const router = express.Router();
// MOCKDATA
const mockData = require('../../api_mockdata.json');
// RESULTS
let result = [];
// DATABASE SETUP
const MongoClient = require('mongodb').MongoClient;
async function database() {
  const uri = `mongodb+srv://antony_kariu:${
    process.env.MONGO_ATLAS_PW
  }@crazeexp-cluster-1-eo7jw.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    // connec to MongoDB cluster
    await client.connect();
    // Make the appropriate DB calls
    let accounts = client.db("todo_db").collection("accounts");
    // await accounts.insertMany(mockData);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
database().catch(console.error);

router.get('/', (req,res,next) =>{
  res.status(200).json({"message": 'it works'});
});

module.exports = router;
