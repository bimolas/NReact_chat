import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

    const handleSend = () => {
        onSendMessage(text);
            setText('');
              };

                return (
                    <View style={styles.container}>
                          <TextInput
                                  style={styles.input}
                                          value={text}
                                                  onChangeText={setText}
                                                          placeholder="Type a message..."
                                                                  multiline
                                                                        />
                                                                              <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                                                                                      <Ionicons name="send" size={24} color="white" />
                                                                                            </TouchableOpacity>
                                                                                                </View>
                                                                                                  );
                                                                                                  };

                                                                                                  const styles = StyleSheet.create({
                                                                                                    container: {
                                                                                                        flexDirection: 'row',
                                                                                                            alignItems: 'center',
                                                                                                                padding: 10,
                                                                                                                    backgroundColor: '#fff',
                                                                                                                        borderTopWidth: 1,
                                                                                                                            borderTopColor: '#e0e0e0',
                                                                                                                              },
                                                                                                                                input: {
                                                                                                                                    flex: 1,
                                                                                                                                        borderWidth: 1,
                                                                                                                                            borderColor: '#ddd',
                                                                                                                                                borderRadius: 20,
                                                                                                                                                    paddingHorizontal: 15,
                                                                                                                                                        paddingVertical: 8,
                                                                                                                                                            marginRight: 10,
                                                                                                                                                                maxHeight: 100,
                                                                                                                                                                  },
                                                                                                                                                                    sendButton: {
                                                                                                                                                                        backgroundColor: '#6200ee',
                                                                                                                                                                            borderRadius: 20,
                                                                                                                                                                                width: 40,
                                                                                                                                                                                    height: 40,
                                                                                                                                                                                        justifyContent: 'center',
                                                                                                                                                                                            alignItems: 'center',
                                                                                                                                                                                              },
                                                                                                                                                                                              });

                                                                                                                                                                                              export default MessageInput;