import { createServer } from "lwr";

createServer()
    .listen(({ port, serverMode }) => {
        console.log(`succes`);
        console.log(`App listening on port ${port} in ${serverMode} mode\n`);
    })
    .catch((err) => {
        console.log(`error`);
        console.error(err);
        process.exit(1);
});