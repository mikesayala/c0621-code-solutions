for (let i = 0; i < process.argv.length; i++) {
  if (i === (process.argv.length - 1)) {
    console.log(process.argv[i]);
  }
}
