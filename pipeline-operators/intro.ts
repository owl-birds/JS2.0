// still in development
// functional programming
const square = (a: number) => a * a;
const add_two = (a: number) => a + 2;

const opt_1 = (x: number) => {
  const temp = add_two(x);
  return square(temp);
};
const opt_2 = (x: number) => {
  return square(add_two(x));
};

const piped = (x: number) => {
    return add_two(x)
        |> square(%)
        |> square={%};
}
// |> piped :::: result |> func(result) |> ...