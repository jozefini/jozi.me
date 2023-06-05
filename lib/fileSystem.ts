import fs from 'fs'
import { promisify } from 'util'

const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)
const mkdir = promisify(fs.mkdir)

export const asyncWriteFile = async (path: string, data: any): Promise<void> => {
  const dir = path.split('/').slice(0, -1).join('/')

  try {
    await mkdir(dir, { recursive: true })
    await writeFile(path, JSON.stringify(data), 'utf-8')
    console.log(`[Success Write] ${path}`)
  } catch (e) {
    console.log(`[Failure Write] ${path}`)
  }
}

export const asyncReadFile = async (path: string): Promise<any> => {
  let data = null

  try {
    const fileContent = await readFile(path, 'utf-8')
    data = await JSON.parse(fileContent)
    console.log(`[Success Read] ${path}`)
  } catch (e) {
    console.log(`[Failure Read] ${path}`)
  }
  return data
}
