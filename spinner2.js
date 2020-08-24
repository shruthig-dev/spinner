
const characters = ['\r/  ','\r-  ','\r\\  ','\r|  ','\r/  ','\r-  ','\r-  ','\r\\  ','\r|  ','\n'];
let timeInterval = 100;

for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    process.stdout.write(characters[i]);
  }, timeInterval += 200);
}