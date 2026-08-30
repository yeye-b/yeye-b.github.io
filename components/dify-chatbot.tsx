'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    difyChatbotConfig?: {
      token: string;
      baseUrl: string;
      inputs: Record<string, string>;
      systemVariables: Record<string, string>;
      userVariables: Record<string, string>;
    };
  }
}

const chatbotToken = 'agud5joQ59o3zS5A';

export function DifyChatbot() {
  useEffect(() => {
    window.difyChatbotConfig = {
      token: chatbotToken,
      baseUrl: 'https://udify.app',
      inputs: {},
      systemVariables: {},
      userVariables: {},
    };

    if (document.getElementById(chatbotToken)) return;

    const script = document.createElement('script');
    script.src = 'https://udify.app/embed.min.js';
    script.id = chatbotToken;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
