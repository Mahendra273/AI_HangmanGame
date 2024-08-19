import React, { useState } from "react";
import axios from "axios";

interface WordData {
  wordCategorie: string;
  wordList: string[];
}

interface ChatGptComponentProps {
  setwordDataupdate: (data: WordData) => void;
}

const ChatGptComponent: React.FC<ChatGptComponentProps> = ({ setwordDataupdate }) => {

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";

  


  const [response, setResponse] = useState<string[]>([]);
  const [isSent, setIsSent] = useState(true);

  const callGpt = () => {
    sendMessage();
  };

  const sendMessage = async () => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    setIsSent(false);
    try {
      const res = await axios.post(
        url,
        {
          "contents": [{
            "role": "user",
            "parts": [{
              "text": 'can you please provide 10 animal singale word names '
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
      setIsSent(true);

      const responseMessage = resjson.candidates[0].content.parts[0].text;
      const wordsList = textChanges(responseMessage);

      console.log(resjson, wordsList);
      setResponse(wordsList);

      // Optionally update wordData in parent component
      setwordDataupdate({
        wordCategorie: "Animals",
        wordList: wordsList
      });

    } catch (error) {
      console.error('Error:', error);
      setIsSent(true);
    }
  };

  function textChanges(arr: string): string[] {
    const orderRemove = arr.split('\n');
    return orderRemove.map(item => item.replace(/^\d+\.\s*/, '').trim());
  }

  return (
    <>
      <button type="button" onClick={callGpt}>
        Get Animal Names
      </button>
      <div>
        {response.length > 0 ? (
          <ul>
            {response.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No data yet</p>
        )}
      </div>
    </>
  );
}

export default ChatGptComponent;
