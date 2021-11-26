let s: any = "this is ts";

// 上面定义的 s 类型为 any, 但实际的赋值为字符串
// 所以我们可以直接将 s 的类型定义为 字符串

let len1: number = (<string>s).length;
let len: number = (s as string).length;
