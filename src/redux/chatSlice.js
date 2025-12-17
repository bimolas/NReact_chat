import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
      { id: '1', text: 'Welcome to the chat!', sender: 'system', timestamp: new Date() },
        ],
          username: '',
          };

          const chatSlice = createSlice({
            name: 'chat',
              initialState,
                reducers: {
                    addMessage: (state, action) => {
                          const { text, sender } = action.payload;
                                state.messages.push({
                                        id: Date.now().toString(),
                                                text,
                                                        sender,
                                                                timestamp: new Date(),
                                                                      });
                                                                          },
                                                                              setUsername: (state, action) => {
                                                                                    state.username = action.payload;
                                                                                        },
                                                                                          },
                                                                                          });

                                                                                          export const { addMessage, setUsername } = chatSlice.actions;
                                                                                          export default chatSlice.reducer;