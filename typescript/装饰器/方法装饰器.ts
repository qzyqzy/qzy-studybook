class Student {
  @logClass("add")
  add(x: number, y: number): number {
    return x + y;
  }
}

function logClass(p: any) {
  return function (target: any, methodName: string, desc: any) {
    console.log(p, target, methodName, desc);
  };
}

export default void 0;
