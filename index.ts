import yargs from "yargs";
import { hideBin } from "yargs/helpers";
yargs()
  .command(
    "get",
    "make a get HTTP request",
    {
      url: {
        alias: "u",
        default: "http://yargs.js.org/",
      },
    },
    function (argv) {
      console.log(argv.url);
    }
  )
  .help()
  .parse(hideBin(process.argv));
