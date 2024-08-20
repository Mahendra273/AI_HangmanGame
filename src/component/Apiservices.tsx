import axios from 'axios';

export async function handleChatGpt(category: string) {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  try {
    const res = await axios.post(
      url,
      {
        "contents": [{
          "role": "user",
          "parts": [{
            "text": `can you please provide 100 ${category} single word names and it's should be less than 7 letters`
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const resjson = res.data;
    const responseMessage = resjson.candidates[0].content.parts[0].text;
    return textChanges(responseMessage);
  } catch (error) {
    console.error('Error:', error);
    return []; // Return an empty array on error
  }
}

function textChanges(arr: string) {
  const orderRemove = arr.split('\n');
  return orderRemove.map(item => item.replace(/^\d+\.\s*/, '').trim());
}
