import { getCLIArgs } from "../src/utilities";
import assert from "assert";
import { describe, test } from "mocha";

describe('getCLIArgs()', function() {
    test('should return rawArgs with the first two elements removed', function() {
        // Arrange
        const rawArgs = ['1', '2', '3', 'a', 'b', 'c']
        const expectedResult = ['3', 'a', 'b', 'c']
        const expectedResultLength = 4
        
        // Act
        const result = getCLIArgs(rawArgs)

        // Assert
        assert.deepEqual(result, expectedResult)
        assert.equal(result.length, expectedResultLength)
    })
})