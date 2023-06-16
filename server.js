// const express = require('express');
// const { MongoClient } = require('mongodb');
// const axios = require('axios');


// const app = express();
// const port = 3000; // Choose a port number that suits your needs

// // Define your routes and middleware here
// // For example:
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// // Start the Express.js server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// const mongoURL = 'mongodb://localhost:27017';
// const dbName = 'mydatabase';
// const collectionName = 'mycollection';

// const client = new MongoClient(mongoURL);

// async function connectToDatabase() {
//     await client.connect();
//     console.log('Connected to MongoDB');
// }

// // Call this function to establish the connection
// connectToDatabase();

// axios.get('0.0.0.0.12121')
//     .then(response => {
//         const data = response.data; // Assuming the response data is an array or object

//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);

//         // Insert the data into the collection
//         collection.insertOne(data)
//             .then(result => {
//                 console.log('Data stored in MongoDB');
//             })
//             .catch(error => {
//                 console.error('Error storing data in MongoDB:', error);
//             });
//     })
//     .catch(error => {
//         console.error('Error retrieving data from Axios:', error);
//     });

//15-06
// const express = require('express');
// const { MongoClient } = require('mongodb');
// const axios = require('axios');

// const app = express();
// const port = 3000; // Choose a port number that suits your needs

// const mongoURL = 'mongodb://localhost:27017';
// const dbName = 'mydatabase';
// const collectionName = 'mycollection';

// const client = new MongoClient(mongoURL);

// async function connectToDatabase() {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// // Call this function to establish the connection
// connectToDatabase();

// // Add CORS middleware
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// // Define your routes and middleware here
// // For example:
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.get('/fetch-data', (req, res) => {
//     axios.get('0.0.0.0.12121') // Replace with the correct URL to retrieve data
//         .then(response => {
//             const data = response.data; // Modify based on the structure of the response

//             const db = client.db(dbName);
//             const collection = db.collection(collectionName);

//             // Insert the data into the collection
//             collection.insertOne(data)
//                 .then(result => {
//                     console.log('Data stored in MongoDB');
//                     res.send('Data stored in MongoDB');
//                 })
//                 .catch(error => {
//                     console.error('Error storing data in MongoDB:', error);
//                     res.status(500).send('Error storing data in MongoDB');
//                 });
//         })
//         .catch(error => {
//             console.error('Error retrieving data from Axios:', error);
//             res.status(500).send('Error retrieving data from Axios');
//         });
// });


// // Start the Express.js server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


//16-06 chatgpt
// const express = require('express');
// const { MongoClient } = require('mongodb');
// const axios = require('axios');

// const app = express();
// const port = 3000; // Choose a port number that suits your needs

// const mongoURL = 'mongodb://localhost:27017';
// const dbName = 'mydatabase';
// const collectionName = 'mycollection';

// const client = new MongoClient(mongoURL);

// async function connectToDatabase() {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// // Call this function to establish the connection
// connectToDatabase();

// // Add CORS middleware
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// // Define your routes and middleware here
// // For example:
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.get('/fetch-data', (req, res) => {
//     axios.get('0.0.0.0.12121') // Replace with the correct URL to retrieve data
//         .then(response => {
//             const data = response.data; // Modify based on the structure of the response

//             const db = client.db(dbName);
//             const collection = db.collection(collectionName);

//             // Insert the data into the collection
//             collection.insertOne(data)
//                 .then(result => {
//                     console.log('Data stored in MongoDB');
//                     res.send('Data stored in MongoDB');
//                 })
//                 .catch(error => {
//                     console.error('Error storing data in MongoDB:', error);
//                     res.status(500).send('Error storing data in MongoDB');
//                 });
//         })
//         .catch(error => {
//             console.error('Error retrieving data from Axios:', error);
//             res.status(500).send('Error retrieving data from Axios');
//         });
// });


// // Query the number of times a user has logged in and logged out in one single day
// app.get('/query-login-count', async (req, res) => {
//     const today = new Date();
//     const yesterday = new Date(today.getTime() - (1000 * 60 * 60 * 24));

//     const query = {
//         "first_seen": {
//             $gte: yesterday
//         },
//         "last_seen": {
//             $lte: today
//         }
//     };

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     const loginCount = await collection.countDocuments(query);

//     res.send({
//         "loginCount": loginCount
//     });
// });

// // Query the number of users online right now and list all devices logged in
// app.get('/query-online-users', async (req, res) => {
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     const onlineUsers = await collection.countDocuments({
//         "last_seen": {
//             $gte: new Date()
//         }
//     });

//     const devicesLoggedIn = await collection.distinct("mac", {
//         "last_seen": {
//             $gte: new Date()
//         }
//     });

//     res.send({
//         "onlineUsers": onlineUsers,
//         "devicesLoggedIn": devicesLoggedIn
//     });
// });

// // Start the Express.js server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

//16-06 Bard
const express = require('express');
const { MongoClient } = require('mongodb');
const axios = require('axios');

const app = express();
const port = 3000; // Choose a port number that suits your needs

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
const collectionName = 'mycollection';

const client = new MongoClient(mongoURL);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call this function to establish the connection
connectToDatabase();

// Add CORS middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Define your routes and middleware here
// For example:
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/fetch-data', (req, res) => {
    axios.get('0.0.0.0.12121') // Replace with the correct URL to retrieve data
        .then(response => {
            const data = response.data; // Modify based on the structure of the response

            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            // Insert the data into the collection
            collection.insertOne(data)
                .then(result => {
                    console.log('Data stored in MongoDB');
                    res.send('Data stored in MongoDB');
                })
                .catch(error => {
                    console.error('Error storing data in MongoDB:', error);
                    res.status(500).send('Error storing data in MongoDB');
                });
        })
        .catch(error => {
            console.error('Error retrieving data from Axios:', error);
            res.status(500).send('Error retrieving data from Axios');
        });
});

// Query the number of times a user has logged in and logged out in one single day
app.get('/query-login-count', (req, res) => {
    const today = new Date();
    const yesterday = new Date(today.getTime() - (1000 * 60 * 60 * 24));

    const query = {
        "first_seen": {
            $gte: yesterday
        },
        "last_seen": {
            $lte: today
        }
    };

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const cursor = collection.find(query);

    const loginCount = cursor.count();

    res.send({
        "loginCount": loginCount
    });
});

// Query the number of users online right now and list all devices logged in
app.get('/query-online-users', (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const cursor = collection.find({
        "last_seen": {
            $gte: new Date()
        }
    });

    const onlineUsers = cursor.count();

    const devicesLoggedIn = [];

    cursor.forEach(doc => {
        devicesLoggedIn.push(doc.mac);
    });

    res.send({
        "onlineUsers": onlineUsers,
        "devicesLoggedIn": devicesLoggedIn
    });
});

// Start the Express.js server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});