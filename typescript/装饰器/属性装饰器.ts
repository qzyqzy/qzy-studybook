class Student {
  @logClass("age")
  age: number = 10;
  @logClass("big")
  static big: string = "ts";
}

function logClass(p: any) {
  return function (target: any, attr: any) {
    console.log(p, target, attr);
  };
}
