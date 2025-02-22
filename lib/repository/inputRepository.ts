import { config } from "../config/envConfig";

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: config.OPENAI_SECRET_KEY
});

const openai = new OpenAIApi(configuration);

export async function getResponseRepository(input: string) {
    try {
        const response = await openai.createChatCompletion({
            model : "o1",
            messages: [{ role: 'user', content: input }],
            max_tokens: 8000,
        });
        return response;
    } catch (err) {
        console.log(`getErrorResponse repository error: ${err}`);
        throw err;
    }
}