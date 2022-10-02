import { expect, it } from "vitest";

type Params = {
  first: number,
  second: number
}

type addNumbersType = (args: Params) => number;

export const addTwoNumbers: addNumbersType = (params) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
