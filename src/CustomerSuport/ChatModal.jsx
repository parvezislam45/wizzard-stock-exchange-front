import { useEffect, useState } from "react";

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [autoReplies] = useState([
    "How can we assist you today?",
    "Whether you have questions about stock trading, investment strategies, or any other related topics, our team of experts is here to help.",
    "Feel free to ask any questions you have,",
    "Thank you for choosing Wizards Stock Exchange."
  ]);

  const openChatModal = () => {
    setIsOpen(true);
  };

  const closeChatModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      // Save the client's message in the chat history
      const clientMessage = { sender: 'You', message };
      setChatHistory((prevHistory) => [...prevHistory, clientMessage]);
      setMessage('');

      // Send auto-replies one by one
      if (autoReplies.length > 0) {
        const autoReply = autoReplies.shift();
        const supportMessage = { sender: 'Support', message: autoReply };
        setChatHistory((prevHistory) => [...prevHistory, supportMessage]);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Simulate a welcome message when the chat modal is opened
      setChatHistory([
        
      ]);
    }
  }, [isOpen]);
  
  return (
    <div>
      <button onClick={openChatModal}>
        <a className="block w-24 h-24 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src="https://png.pngtree.com/png-vector/20220818/ourlarge/pngtree-rounded-vector-icon-of-a-blue-colored-help-desk-vector-png-image_19578304.jpg"
          />
        </a>
      </button>

      {isOpen && (
        <div className="fixed right-4 bottom-4 w-80 h-2/4 bg-black p-4 rounded shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Customer Support</h2>
            <button
              onClick={closeChatModal}
              className="text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
          <div className="mt-4 h-3/5">
            <div className="h-4/5 p-2 overflow-y-auto">
              {chatHistory.map((entry, index) => (
                <div key={index} className={`${
                  entry.sender === 'You' ? 'text-end' : ''
                } mt-5 mb-5 text-md`}>
                  <p className="text-end bg-blue-600 text-white rounded-lg py-2 px-4 inline-block">{entry.message}</p>
                  
                </div>
              ))}
            </div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <button onClick={sendMessage} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatModal;
