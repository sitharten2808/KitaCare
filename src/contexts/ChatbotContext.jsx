import React, { createContext, useContext, useState } from 'react';

const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatbot = () => setIsOpen(true);
  const closeChatbot = () => setIsOpen(false);

  return (
    <ChatbotContext.Provider value={{ isOpen, openChatbot, closeChatbot }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}; 