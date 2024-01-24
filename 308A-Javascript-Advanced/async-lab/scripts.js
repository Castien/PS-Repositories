// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";
async function getUserData(id) {
  try {
    const dbs = {
      db1: db1,
      db2: db2,
      db3: db3,
    };
    const db = await central(id);
    const [info, secure] = await Promise.all([dbs[db], vault(id)]);
    return { id, ...info, ...secure };
  } catch (error) {
    return error;
  }
}
(async () => {
  const time = new Date().getTime();
  console.log(await getUserData(1));
  console.log("processed completed in:", new Date().getTime() - time, "ms");
})();
