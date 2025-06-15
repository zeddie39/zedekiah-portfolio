
import "https://deno.land/x/xhr@0.1.0/mod.ts"
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { text } = await req.json()

    if (!text) {
      throw new Error('Text is required')
    }

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
    if (!OPENAI_API_KEY) {
        console.error("OPENAI_API_KEY is not set.");
        throw new Error('Text-to-speech service is not configured.')
    }

    // Generate speech from text
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: 'alloy', // a standard voice, can be changed
        response_format: 'mp3',
      }),
    })

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API Error:', errorText);
      try {
        const openAIError = JSON.parse(errorText);
        if (openAIError.error) {
          if (openAIError.error.code === 'insufficient_quota') {
            throw new Error("You've exceeded your current quota. Please check your plan and billing details on OpenAI.");
          }
          throw new Error(openAIError.error.message || 'An unknown error occurred with OpenAI.');
        }
      } catch (e) {
        // Parsing failed, fall back to raw text
      }
      throw new Error(`OpenAI API error: ${errorText}`)
    }

    // Convert audio buffer to base64 using a robust method
    const arrayBuffer = await response.arrayBuffer()
    const base64Audio = encode(arrayBuffer);

    return new Response(
      JSON.stringify({ audioContent: base64Audio }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error in openai-tts function:', error.message);
    // Always return 200, but with an error object if something went wrong.
    // The client will check for the 'error' property in the response.
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})
