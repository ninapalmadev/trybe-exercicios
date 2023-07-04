import { useState, useEffect } from 'react';

import './App.css';

import messagesList from './data/messagesList';
import List from './components/List';

import { READ, UNREAD } from './constants';

import Controls from './components/Controls';

function App() {
  const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);

    if (isAllMessagesRead) {
      alert("Todas as mensagens foram lidas!")
    }
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updateMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return {
          ...currentMessage,
          status: newStatus,
        };
      }
      return currentMessage;
    });

    setMessages(updateMessages);
  };

  const markAllAsRead = () => {
    const allAsRead = messages.map((message) => ({
      ...message,
      status: READ,
    }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsUnread = messages.map((message) => ({
      ...message,
      status: UNREAD,
    }));
    setMessages(allAsUnread);
  };


  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      
      <Controls
      markAllAsRead={ markAllAsRead }
      markAllAsUnread={ markAllAsUnread }
      />

      <List 
      messages={ messages } 
      setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;