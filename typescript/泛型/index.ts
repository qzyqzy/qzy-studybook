interface config<T> {
  (val: T): T;
}

function configFn<T>(val: T): T {
  return val;
}

// config<string>
// = configFn
let fn: config<string> = configFn;

fn("qzy");
