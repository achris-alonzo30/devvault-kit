"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export default function AI_Feedback() {
  const [allChats, setAllChats] = useState<{ id: string; name: string; messages: Message[] }[]>(() => {
    const savedChats = localStorage.getItem("allChats");
    return savedChats ? JSON.parse(savedChats) : [];
  });
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const currentChat =
    allChats.find((chat) => chat.id === activeChatId) || {
      id: "default",
      name: "Default Chat",
      messages: [
        {
          role: "assistant",
          content: "Hello! How can I assist you today?",
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    };

  // Save chats to localStorage on any change
  useEffect(() => {
    localStorage.setItem("allChats", JSON.stringify(allChats));
  }, [allChats]);

  // Auto scroll to the bottom of the chat container when a new message is added
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [currentChat.messages]);

  // Set the header height dynamically
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessage: Message = {
      role: "user",
      content: userInput,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...currentChat.messages, newMessage];

    setAllChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === currentChat.id ? { ...chat, messages: updatedMessages } : chat
      )
    );

    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: `You mentioned: "${userInput}". Can I help with anything else?`,
        timestamp: new Date().toLocaleTimeString(),
      };

      const updatedMessagesWithAI = [...updatedMessages, aiResponse];

      setAllChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === currentChat.id ? { ...chat, messages: updatedMessagesWithAI } : chat
        )
      );

      setIsTyping(false);
    }, 1000);

    setUserInput("");
  };

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      name: `Chat ${allChats.length + 1}`,
      messages: [
        {
          role: "assistant",
          content: "Hello! How can I assist you today?",
          timestamp: new Date().toLocaleTimeString(),
        },
      ] as Message[], // Explicitly cast to the correct Message[] type
    };

    setAllChats((prevChats) => [...prevChats, newChat]);
    setActiveChatId(newChat.id);
  };

  const handleSelectChat = (id: string) => {
    setActiveChatId(id);
  };

  return (
    <div className="flex h-screen bg-[#343541] text-white">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#40414f] p-4 space-y-4 flex flex-col">
        <button
          onClick={handleNewChat}
          className="w-full px-4 py-3 bg-[#10a37f] rounded-md font-medium text-white hover:bg-[#0e865f] transition"
        >
          + New Chat
        </button>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#4e4f63] scrollbar-track-[#343541] space-y-2">
          {allChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleSelectChat(chat.id)}
              className={`p-3 rounded-md cursor-pointer ${chat.id === activeChatId ? "bg-[#4e4f63]" : "hover:bg-[#4e4f63]"}`}
            >
              {chat.name}
            </div>
          ))}
        </div>
        <footer className="text-xs text-gray-400">Powered by OpenAI</footer>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <header
          ref={headerRef}
          className="bg-[#40414f] py-2 px-6 flex items-center justify-between shadow-md"
        >
          <h1 className="text-md font-semibold">{currentChat.name}</h1>
        </header>
        <main
          ref={chatContainerRef}
          style={{ paddingTop: `${headerHeight + 8}px` }}
          className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-[#4e4f63] scrollbar-track-[#343541]"
        >
          {currentChat.messages.map((message, index) => (
            <ChatBubble
              key={index}
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}
        </main>
        <footer className="bg-[#40414f] p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="flex-1 px-4 py-3 rounded-md bg-[#343541] text-white outline-none placeholder-gray-400 border border-[#4e4f63] focus:ring-2 focus:ring-[#10a37f]"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 bg-[#10a37f] rounded-md font-medium text-white hover:bg-[#0e865f] transition"
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ChatBubble Component
const ChatBubble: React.FC<{ role: "user" | "assistant"; content: string; timestamp: string }> = ({
  role,
  content,
  timestamp,
}) => (
  <div className={`flex ${role === "user" ? "justify-end" : "justify-start"} items-start`}>
    <div
      className={`max-w-[75%] p-4 rounded-lg text-sm shadow-md ${role === "user" ? "bg-[#10a37f] text-white" : "bg-[#444654] text-white"}`}
    >
      <p className="text-xs text-gray-400 mb-1">{timestamp}</p>
      <p>{content}</p>
    </div>
  </div>
);

// TypingIndicator Component
const TypingIndicator: React.FC = () => (
  <div className="flex justify-start items-center">
    <div className="bg-[#444654] text-white max-w-[75%] p-4 rounded-lg text-sm shadow-md">
      <span className="text-gray-400">AI is typing...</span>
    </div>
  </div>
);
