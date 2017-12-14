let sum = 0;
for (let i = 2, len = process.argv.length; i < len; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);