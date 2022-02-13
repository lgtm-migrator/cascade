import { open, FileHandle } from 'fs/promises'
import { createReadStream, ReadStream } from 'fs'

export async function getFileReadStream(filepath: string): Promise<ReadStream> {
    let handle: FileHandle
    try {
        handle = await open(filepath, 'r')
        return handle.createReadStream()
            
    } catch (error) {
        throw new Error(`Errow opening file: ${error}`)
    }
}