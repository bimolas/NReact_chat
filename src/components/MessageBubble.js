import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBubble = ({ message, isCurrentUser }) => {
  const { text, sender, timestamp } = message;
    
      const formatTime = (date) => {
          return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            };

              return (
                  <View style={[
                        styles.container,
                              isCurrentUser ? styles.currentUserContainer : styles.otherUserContainer
                                  ]}>
                                        {!isCurrentUser && <Text style={styles.senderText}>{sender}</Text>}
                                              <View style={[
                                                      styles.bubble,
                                                              isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble
                                                                    ]}>
                                                                            <Text style={[
                                                                                      styles.messageText,
                                                                                                isCurrentUser ? styles.currentUserText : styles.otherUserText
                                                                                                        ]}>
                                                                                                                  {text}
                                                                                                                          </Text>
                                                                                                                                </View>
                                                                                                                                      <Text style={styles.timeText}>{formatTime(timestamp)}</Text>
                                                                                                                                          </View>
                                                                                                                                            );
                                                                                                                                            };

                                                                                                                                            const styles = StyleSheet.create({
                                                                                                                                              container: {
                                                                                                                                                  marginVertical: 5,
                                                                                                                                                      maxWidth: '80%',
                                                                                                                                                        },
                                                                                                                                                          currentUserContainer: {
                                                                                                                                                              alignSelf: 'flex-end',
                                                                                                                                                                  alignItems: 'flex-end',
                                                                                                                                                                    },
                                                                                                                                                                      otherUserContainer: {
                                                                                                                                                                          alignSelf: 'flex-start',
                                                                                                                                                                              alignItems: 'flex-start',
                                                                                                                                                                                },
                                                                                                                                                                                  bubble: {
                                                                                                                                                                                      paddingHorizontal: 15,
                                                                                                                                                                                          paddingVertical: 10,
                                                                                                                                                                                              borderRadius: 20,
                                                                                                                                                                                                  marginVertical: 2,
                                                                                                                                                                                                    },
                                                                                                                                                                                                      currentUserBubble: {
                                                                                                                                                                                                          backgroundColor: '#6200ee',
                                                                                                                                                                                                            },
                                                                                                                                                                                                              otherUserBubble: {
                                                                                                                                                                                                                  backgroundColor: '#e0e0e0',
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                      messageText: {
                                                                                                                                                                                                                          fontSize: 16,
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                              currentUserText: {
                                                                                                                                                                                                                                  color: 'white',
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                      otherUserText: {
                                                                                                                                                                                                                                          color: 'black',
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                              senderText: {
                                                                                                                                                                                                                                                  fontSize: 12,
                                                                                                                                                                                                                                                      color: '#666',
                                                                                                                                                                                                                                                          marginBottom: 2,
                                                                                                                                                                                                                                                              marginLeft: 5,
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                  timeText: {
                                                                                                                                                                                                                                                                      fontSize: 10,
                                                                                                                                                                                                                                                                          color: '#999',
                                                                                                                                                                                                                                                                              marginTop: 2,
                                                                                                                                                                                                                                                                                  marginHorizontal: 5,
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                    export default MessageBubble;