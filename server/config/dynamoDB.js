const AWS = require('aws-sdk');

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION
}

AWS.config.update(awsConfig)

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB;

