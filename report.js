const newman = require('newman');

newman.run({
    collection: 'https://api.postman.com/collections/37010151-db86a84f-11dc-4f56-9666-5ac44a17c8d4?access_key=PMAT-01JKZ6N84VFSV2N4MCK6FGYJ2Y',
    reporters: 'htmlextra',
    iterationCount: 1,  
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
        }
    }
    
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});