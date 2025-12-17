import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
      { id: '1', text: 'Welcome to the chat!', sender: 'system', timestamp: new Date() },
        ]);
          const [username, setUsername] = useState('');

            const addMessage = (text, sender) => {
                const newMessage = {
                      id: Date.now().toString(),
                            text,
                                  sender,
                                        timestamp: new Date(),
                                            };
                                                
                                                    setMessages(prevMessages => [...prevMessages, newMessage]);
                                                      };

                                                        return (
                                                            <ChatContext.Provider value={{
                                                                  messages,
                                                                        username,
                                                                              setUsername,
                                                                                    addMessage,
                                                                                        }}>
                                                                                              {children}
                                                                                                  </ChatContext.Provider>
                                                                                                    );
                                                                                                    };

                                                                                                    export const useChat = () => {
                                                                                                      const context = useContext(ChatContext);
                                                                                                        if (!context) {
                                                                                                            throw new Error('useChat must be used within a ChatProvider');
                                                                                                              }
                                                                                                                return context;
                                                                                                                };

                                                                                                                export default ChatContext;