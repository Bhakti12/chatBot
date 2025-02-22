import { config } from "../config/envConfig";

// import OpenAI from "openai";
import { Groq } from "groq-sdk";

// const configuration = new OpenAI({
//     apiKey: config.OPENAI_SECRET_KEY
// });

const groq = new Groq({apiKey: config.OPENAI_SECRET_KEY});

export async function getResponseRepository(input: string) {
    try {
        // const response = await configuration.chat.completions.create({
        //     model : 'gpt-4-turbo',
        //     messages: [{ role: 'system', content: input }],
        //     max_tokens: 8000,
        // });
        // return response.choices[0].message;
        let output = '';
        const response = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "system",
                    "content": ""
                },
                {
                    "role": "user",
                    "content": input
                }
            ],
            "model": "llama-3.3-70b-versatile",
            "temperature": 1,
            "max_completion_tokens": 1024,
            "top_p": 1,
            "stream": true,
            "stop": null
        });
        for await (const chunk of response) {
            console.log(chunk.choices[0].delta.content);
            output += chunk.choices[0].delta.content; 
        }
        console.log(output);
        return output;
    } catch (err) {
        console.log(`getErrorResponse repository error: ${err}`);
        throw err;
    }
}


// const Groq = require('groq-sdk');

// const groq = new Groq();
// async function main() {
//   const chatCompletion = await groq.chat.completions.create({
//     "messages": [
//       {
//         "role": "system",
//         "content": "hello bhakti this side\n"
//       },
//       {
//         "role": "user",
//         "content": "Hello"
//       },
//       {
//         "role": "assistant",
//         "content": "It's nice to meet you. Is there something I can help you with or would you like to chat?"
//       }
//     ],
//     "model": "llama-3.3-70b-versatile",
//     "temperature": 1,
//     "max_completion_tokens": 1024,
//     "top_p": 1,
//     "stream": true,
//     "stop": null
//   });

//   for await (const chunk of chatCompletion) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
// }

// main();