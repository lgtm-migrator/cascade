import { readBit } from "../src/parts/bits";
import assert from "assert";
import { describe, test } from "mocha";

describe('readBit()', function () {
    test('returns 0 when bit is not set', function() {
        // Arrange
        const value = 32
        const index = 5
        const expectedResult = 1

        // Act 
        const result = readBit(value, index)

        // Assert
        assert.strictEqual(result, expectedResult)
    })
})