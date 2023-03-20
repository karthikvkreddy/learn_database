// Version 5.1 
// https://mongodb.github.io/node-mongodb-native/5.1/
// https://mongoosejs.com

//  mongodb/bin/mongod --dbpath=/Users/karthikkumarreddy/Documents/mongodb-data

- InsertOne
- InsertMany
- creating a connectin
- local setup
- find 
- findOne 


CRUD:
// CREATE
    const insertManyDoc = await db.collection('tasks').insertMany([{
            description: 'Clean a house',
            completed : true
        },{
            description: 'Inspection',
            completed : false
        },{
            description: 'service bike',
            completed : true
            }
        ]);
    console.log(insertManyDoc);

// READ

- ids => auto populated global key to identify the keys called (guid)
- can generate the ids for the documents of our own  // DEPRECATED

- findOne :
    const user = await db.collection('users').findOne({name: 'karthik'})
        console.log(user);
    const user = await db.collection('users').findOne({name: 'karthik', age: 25})
        console.log(user);
    - it always gives 1 results
    - if many found, returns first occorance

    - To retrive results based on id :
        const user = await db.collection('users').findOne({ _id: new ObjectId("640acc1e4f8b3b134826adf9")})
    
    - find:
        - use toArray() to change it to array
            await db.collection('users').find({ _id: new ObjectId("640acc1e4f8b3b134826adf9")}).toArray();
        - count()
        - to find last task :
            find({id:-1}).limit(1)

// Promises 

// Update

- updateOne
  await db.collection('users').updateOne({_id:new ObjectId("640aacf908f2806a69463f70")}, 
    {
        $set: {
            name: 'newKarthikReddy'
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err);
    });   

- updateMany:
    await db.collection('users').updateMany(
        {age: {$gt:20}}, 
        {
            $set: {
                name: "newName"
            }
        }
        ).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    });  

- operators:
    $currentDate - Sets the value of a field to current date, either as a Date or a Timestamp.
    $inc - Increments the value of the field by the specified amount.
    $min - Only updates the field if the specified value is less than the existing field value.
    $max - Only updates the field if the specified value is greater than the existing field value.
    $mul - Multiplies the value of the field by the specified amount.
    $rename - Renames a field.
    $set - Sets the value of a field in a document.
    $setOnInsert - Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.
    $unset - Removes the specified field from a document. 


// DELETE
 await db.collection('users').deleteMany(
        {
            age: {$lt:5}
        }
        ).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    });