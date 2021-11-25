// 布尔值
let b: boolean = true;

// 数字
let n: number = 10;

// 字符串
let s: string = "ts";

// 数组定义存在两种方法
// 第一种：元素类型后接 []
let list: number[] = [1, 2, 3];
let list1: string[] = ["a", "b", "c"];

// 第二种：数组泛型 Array<元素类型>
let list2: Array<number> = [1, 2, 3];

// 元祖
let t: [string, number] = ["t", 1];
// 当访问越界元素时，会使用联合类型
// 即只要是订阅的类型都可以使用
t.push("s");
t.push("s");
// 这里会提示错误
// t[100] = 2; // 不能将类型“2”分配给类型“undefined”。长度为 "2" 的元组类型 "[string, number]" 在索引 "100" 处没有元素。

// 枚举
enum Color {
  Red = 1,
  Green = 3,
  Blue = 5,
}

let c: Color = Color.Red;

let cName: string = Color[1];
