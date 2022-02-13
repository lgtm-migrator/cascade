import assert from "assert";
import { describe, test } from "mocha";
import { ReadStream } from 'fs'
import { getFileReadStream } from '../src/io'
import path from 'path'

describe('getFileStream()', function () {
    test('should return a readable stream when passed a valid input file', async function () {
        // Arrange
        const inputFilepath = './package.json'
        const expectedResultInstanceType = ReadStream
        const joinedFilepath = path.join(process.cwd(), inputFilepath)

        // Act
        const result = await getFileReadStream(joinedFilepath)

        // Assert
        assert(result instanceof expectedResultInstanceType === true)
    })

    test('should throw an error when passed a invalid input file', function () {
        // Arrange
        const inputFilepath = 'fake.json'

        // Act
        assert.rejects(
            async () => { 
                return getFileReadStream(inputFilepath) 
            }, 
            "FooError"
            )
    })
})