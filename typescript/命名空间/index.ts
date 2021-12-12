namespace A {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

namespace B {
  function add(x: number, y: number): number {
    return x * 2 + y * 2;
  }
}

console.log(A.add(2, 4));
