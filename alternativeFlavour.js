const os = require('os')

// info of current user
const user = os.userInfo()
console.log(user);

// method to return system uptime in seconds
console.log(`${os.uptime()} + seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);