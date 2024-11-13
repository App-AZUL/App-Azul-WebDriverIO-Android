const fs = require('fs');

const prometeusDataPath = `${__dirname}/allure-report/allure-report/export/prometheusData.txt`;
const failedTestCount = fs.readFileSync(prometeusDataPath);
let getTestDataFailed = failedTestCount.toString().split('\n').slice(0, 1);
if (Number(getTestDataFailed[0].slice(-2)) > 0) {
    console.log("Failed!!");
    process.exit(1);
} else {
    console.log('Success!!');
}