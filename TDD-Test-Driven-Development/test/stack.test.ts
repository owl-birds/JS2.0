// unit testing
class Stack {
  top: number;
  items: { [index: number]: any };
  constructor() {
    this.top = -1; // the top of the stack
    this.items = {};
  }
  push(input: any) {
    this.top += 1;
    this.items[this.top] = input;
  }
  get peek() {
    return this.items[this.top];
  }
}

describe("My Stack", () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it.todo("is created empty", () => {
    // const stack: Stack = new Stack();
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
    // why not toBe : cause toBe its compare the reference
  });
  it.todo("can push to the top", () => {
    //
    stack.push("ABC");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("ABC");
  });
  it.todo("can pop off");
});
