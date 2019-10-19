var schema = MongoClient.Schema;
let User = new schema({

    username: String,
    password: String,
    rating: int,
    group: group
})


export default User;