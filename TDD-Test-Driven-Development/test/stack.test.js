var Stack = /** @class */ (function () {
    function Stack() {
        this.top = -1; // the top of the stack
        this.items = {};
    }
    Stack.prototype.push = function (input) {
        this.top += 1;
        this.items[this.top] = input;
    };
    Object.defineProperty(Stack.prototype, "peek", {
        get: function () {
            return this.items[this.top];
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
describe("My Stack", function () {
    var stack;
    beforeEach(function () {
        stack = new Stack();
    });
    it.todo("is created empty", function () {
        // const stack: Stack = new Stack();
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
        // why not toBe : cause toBe its compare the reference
    });
    it.todo("can push to the top", function () {
        //
        stack.push("ABC");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("ABC");
    });
    it.todo("can pop off");
});
