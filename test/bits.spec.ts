import { getBit, setBit } from "../src/parts/bits";
import assert from "assert";
import { describe, test } from "mocha";

describe('getBit()', function () {
    test('returns 0 when bit is not set', function() {
        // Arrange
        const value = 32
        const index = 5
        const expectedResult = 1

        // Act 
        const result = getBit(value, index)

        // Assert
        assert.strictEqual(result, expectedResult)
    })


    test('returns 1 when bit is not set', function() {
        // Arrange
        const value = 32
        const index = 4
        const expectedResult = 0

        // Act 
        const result = getBit(value, index)

        // Assert
        assert.strictEqual(result, expectedResult)
    })


})

describe('setBit()', function () {
    test('returns the new number with bit set', function() {
        // Arrange
        const value = 32
        const index = 1
        const expectedResult = 34

        // Act 
        const result = setBit(value, index)

        // Assert
        assert.strictEqual(result, expectedResult)
    })
})
