import fs from 'fs/promises';


export const hashesContentLoader = async () => {
    try {
        const data = await fs.readFile('model/hashes.json', 'utf-8');
        return JSON.parse(data);
    
    } catch (error) {
        console.error('Error reading or parsing hashes JSON file:', error);
        return null;
    }
}

export const hashesContentUploader = async (arr) => {
    await fs.writeFile('model/hashes.json', JSON.stringify(arr, null, 2))
}