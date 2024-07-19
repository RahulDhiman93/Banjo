import * as z from "zod";

export const formSchema = z.object ({
    prompt: z.string().min(1, {
        message: "Prompt is required",
    }),
    modal: z.string().min(1)
});

export const modalOptions = [
    {
        value: "openai",
        label: "OpenAI"
    },
    {
        value: "gemini",
        label: "Gemini"
    },
    {
        value: "mistral",
        label: "Mistral"
    }
]