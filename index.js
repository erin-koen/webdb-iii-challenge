const server = require("./server.js");

//set up port listening (not gonna do the dotenv stuff)
const port = 5000;
server.listen(port, () => console.log(`\n**API RUNNING ON PORT ${port}`));
