import fs from 'fs/promises';


export const usersContentLoader = async () => {
    try {
        const data = await fs.readFile('model/users.json', 'utf-8');
        return JSON.parse(data);
    
    } catch (error) {
        console.error('Error reading or parsing users JSON file:', error);
        return null;
    }
}

export const usersContentUploader = async (arr) => {
    await fs.writeFile('model/users.json', JSON.stringify(arr, null, 2))
}