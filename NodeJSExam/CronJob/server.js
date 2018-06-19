var cronJob = require('cron').CronJob

/* 
* * * * * *
Seconds: 0-59
Minutes: 0-59
Hours: 0-23
Day of Month: 1-31
Months: 0-11
Day of Week: 0-6
*/
new cronJob('0 39 11 * * *', function() {
    console.log('Midnight');
}, null, true, 'Europe/Copenhagen');