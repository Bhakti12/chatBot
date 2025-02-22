import { getResponseRepository } from "../repository/inputRepository";

export async function getResponseService(input: string) {
    try {
        const response = await getResponseRepository(input);
        return response;
    } catch (err) {
        console.log(`getErrorResponse service error: ${err}`);
        throw err;
    }
}