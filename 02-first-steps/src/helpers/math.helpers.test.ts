import { describe, expect, test } from "vitest";
import { add, subtract, multiply, divide } from './math.helpers';

describe("add", () => {
  test("should add two positive numbers", () => {
    // 1. Arrange
    const a = 1;
    const b = 2;

    // 2. act
    const result = add(a, b);

    // 3. Assert
    expect(result).toBe(a + b);

    // const result = add(1,3)
    // console.log({ result })

    // if(result !== 2 ){
    //     throw new Error('El resultado no es 2')
    // }
  });
});

describe("subtract", () => {
  test("should subtract two positive numbers", () => {
    // 1. Arrange
    const a = 4;
    const b = 2;

    // 2. act
    const result = subtract(a, b);

    // 3. Assert
    expect(result).toBe(a - b);
  });
  test("should subtract two negative numbers", () => {
    // 1. Arrange
    const a = -4;
    const b = -2;

    // 2. act
    const result = subtract(a, b);

    // 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    // 1. Arrange
    const a = 1;
    const b = 2;

    // 2. act
    const result = multiply(a, b);

    // 3. Assert
    expect(result).toBe(a * b);
  });
    test("should multiply two negative numbers", () => {
      // 1. Arrange
      const a = -4;
      const b = -2;

      // 2. act
      const result = multiply(a, b);

      // 3. Assert
      expect(result).toBe(a * b);
    });

    describe('divide', () => {
      test('should divide two positive numbers', () => {
        const a =2;
        const b=4;

        const result = divide(a,b);
        expect(result).toBe(a/b);
      })
    })
});
