import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import axios from 'axios';


 export async function POST(
    req: Request
 ) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages, modal } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401})
        }

        if(!messages) {
            return new NextResponse("Messages are required", { status: 400})
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();
        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired.", { status: 403 });
        }

        const apiResponse = await axios.post('http://192.9.144.136:8081/query', {
            messages: messages,
            model: modal
        });

        if (!isPro) {
            await increaseApiLimit();
        }

        const { data } = apiResponse.data;
        return NextResponse.json(data);
    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", { status: 500})
    }
 }