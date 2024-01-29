const AWS = require('aws-sdk');

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION
}

AWS.config.update(awsConfig)

module.exports.documentClient = new AWS.DynamoDB.DocumentClient();


