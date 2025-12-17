import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import MessageInput from '../components/MessageInput';
import MessageBubble from '../components/MessageBubble';
import { ChatProvider } from '../context/ChatContext';

const ChatScreen = ({ route }) => {
  const { username } = route.params;
    const [messages, setMessages] = useState([
        { id: '1', text: 'Welcome to the chat!', sender: 'system', timestamp: new Date() },
          ]);
            const flatListRef = useRef(null);

              const handleSendMessage = (text) => {
                  if (text.trim() === '') return;
                      
                          const newMessage = {
                                id: Date.now().toString(),
                                      text,
                                            sender: username,
                                                  timestamp: new Date(),
                                                      };
                                                          
                                                              setMessages(prevMessages => [...prevMessages, newMessage]);
                                                                  
                                                                      // Simulate a response after a short delay
                                                                          setTimeout(() => {
                                                                                const responseMessage = {
                                                                                        id: (Date.now() + 1).toString(),
                                                                                                text: `You said: "${text}"`,
                                                                                                        sender: 'bot',
                                                                                                                timestamp: new Date(),
                                                                                                                      };
                                                                                                                            setMessages(prevMessages => [...prevMessages, responseMessage]);
                                                                                                                                }, 1000);
                                                                                                                                  };

                                                                                                                                    // Scroll to bottom when new messages are added
                                                                                                                                      useEffect(() => {
                                                                                                                                          if (flatListRef.current) {
                                                                                                                                                flatListRef.current.scrollToEnd({ animated: true });
                                                                                                                                                    }
                                                                                                                                                      }, [messages]);

                                                                                                                                                        const renderMessage = ({ item }) => (
                                                                                                                                                            <MessageBubble 
                                                                                                                                                                  message={item} 
                                                                                                                                                                        isCurrentUser={item.sender === username}
                                                                                                                                                                            />
                                                                                                                                                                              );

                                                                                                                                                                                return (
                                                                                                                                                                                    <SafeAreaView style={styles.container}>
                                                                                                                                                                                          <View style={styles.header}>
                                                                                                                                                                                                  <Text style={styles.headerText}>Chat Room</Text>
                                                                                                                                                                                                          <Text style={styles.usernameText}>Logged in as: {username}</Text>
                                                                                                                                                                                                                </View>
                                                                                                                                                                                                                      
                                                                                                                                                                                                                            <FlatList
                                                                                                                                                                                                                                    ref={flatListRef}
                                                                                                                                                                                                                                            data={messages}
                                                                                                                                                                                                                                                    renderItem={renderMessage}
                                                                                                                                                                                                                                                            keyExtractor={(item) => item.id}
                                                                                                                                                                                                                                                                    style={styles.messagesList}
                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                      <MessageInput onSendMessage={handleSendMessage} />
                                                                                                                                                                                                                                                                                          </SafeAreaView>
                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                            };

                                                                                                                                                                                                                                                                                            const styles = StyleSheet.create({
                                                                                                                                                                                                                                                                                              container: {
                                                                                                                                                                                                                                                                                                  flex: 1,
                                                                                                                                                                                                                                                                                                      backgroundColor: '#f5f5f5',
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                          header: {
                                                                                                                                                                                                                                                                                                              backgroundColor: '#6200ee',
                                                                                                                                                                                                                                                                                                                  padding: 15,
                                                                                                                                                                                                                                                                                                                      flexDirection: 'row',
                                                                                                                                                                                                                                                                                                                          justifyContent: 'space-between',
                                                                                                                                                                                                                                                                                                                              alignItems: 'center',
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                  headerText: {
                                                                                                                                                                                                                                                                                                                                      color: 'white',
                                                                                                                                                                                                                                                                                                                                          fontSize: 18,
                                                                                                                                                                                                                                                                                                                                              fontWeight: 'bold',
                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                  usernameText: {
                                                                                                                                                                                                                                                                                                                                                      color: 'white',
                                                                                                                                                                                                                                                                                                                                                          fontSize: 14,
                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                              messagesList: {
                                                                                                                                                                                                                                                                                                                                                                  flex: 1,
                                                                                                                                                                                                                                                                                                                                                                      padding: 10,
                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                        export default ChatScreen;