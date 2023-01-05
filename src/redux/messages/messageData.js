const url = 'http://localhost:3000/messages';

// Async Slice Message Data
const fetchMessages = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const messageData = data.map((msg) => ({
    id: msg.id,
    message: msg.message,
    created_at: msg.created_at
  }));

  return messageData;
};

export default fetchMessages;
