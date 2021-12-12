@logClass({ age: 10 })
class Student {}

function logClass(params: any) {
  // 接收最外层参数
  console.log(params, "params"); // { age: 10 } params

  return function (target: any) {
    // 接收装饰的类
    console.log(target, "target");
  };
}

export default void 0;
