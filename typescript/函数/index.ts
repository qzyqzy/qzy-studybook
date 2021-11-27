function add(x: number): number;
function add(x: string): string;
function add(x: any): any {
  if (typeof x == "string") {
    return `我是${x}`;
  }
  return x * 2;
}

console.log(add(5)); // 10
console.log(add("5")); // 我是5
// add(true); // 类型“true”的参数不能赋给类型“string”的参数
