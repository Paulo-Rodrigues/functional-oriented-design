import { describe, it, expect } from 'bun:test';
import type { Person } from './person';

describe('Person', () => {
  it("should allow creation of a person object", () => {
    const person: Person = { firstName: "John", lastName: "Doe" };

    expect(person.firstName).toBe("John");
    expect(person.lastName).toBe("Doe");
  });
});
