import { sum } from "../src/main";

test("Deve somar corretamente", () => {
  const soma = sum(2, 2);
  expect(soma).toBe(4);
});
