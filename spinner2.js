const symbols = ['|', '/', '-', '\\', '|'];
let interval = 0;
for (const symbol of symbols) {
  interval += 200;
  setTimeout(() => {
    process.stdout.write(`\r${symbol}`);
  }, interval);
}
