import { add, getWelcomeMessage } from '../src/app';

describe("App Tests", () => {
    test("should add two numbers", () => {
        expect(add(5, 10)).toBe(15);
    })

    test("should return welcome message", () => {
        expect(getWelcomeMessage("John")).toBe("Welcome, John");
    })
})