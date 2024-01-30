const {documentClient} = require("../config/dynamoDB");

module.exports.getAllLocations = async () => {
    const dynamoParams = {
        TableName: 'locations'
    }
    return (await documentClient.scan(dynamoParams).promise()).Items
}

module.exports.createOneLocation = async (location) => {
    const dynamoParams = {
        TableName: 'locations',
        Item: location,
    }

    await documentClient.put(dynamoParams).promise()
}