import { StartPort } from './StartPort';

const port = new StartPort();

const rockets = port.getAllRockets();

let i = 0

for (const rocket of rockets) {
  i++;
  console.log(`Prepare to the next launch #${i}: `);
  rocket.launch();
}