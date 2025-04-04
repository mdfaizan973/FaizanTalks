"use client";

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 206, 201, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 206, 201, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 206, 201, 0); }
`;

const Container = styled.div`
  display: flex;
  height: 95vh;
  background-color: #f8f9fa;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Sidebar = styled.aside`
  width: 25%;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  color: white;
  padding: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  position: relative;
  z-index: 1;

  h2 {
    margin-bottom: 25px;
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(90deg, #00cec9, #0984e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    letter-spacing: 0.5px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  button {
    background: linear-gradient(90deg, #00cec9, #0984e3);
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 25px;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  .chat-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .chat-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    transition: all 0.2s ease;
    border-left: 3px solid transparent;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-left-color: #00cec9;
      transform: translateX(3px);
    }
  }

  .chat-text {
    cursor: pointer;
    flex: 1;
    font-weight: 500;
    font-size: 0.95rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.9);
  }

  .delete-icon {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    font-size: 16px;
    margin-left: 15px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background-color: #ff5c5c;
      color: white;
    }
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #ffffff;
  overflow-y: auto;
  position: relative;

  h1 {
    color: #2d3748;
    margin-bottom: 20px;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.25rem;
    animation: ${fadeIn} 0.6s ease-out;
  }

  .response-section {
    margin-bottom: 25px;
    height: 60vh;
    overflow-y: auto;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 20px;
    background-color: #f8fafc;
    border: 1px solid rgba(0, 0, 0, 0.05);
    animation: ${fadeIn} 0.7s ease-out;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }
  }

  .question {
    text-align: right;
    background: linear-gradient(90deg, #00cec9, #0984e3);
    color: white;
    padding: 12px 18px;
    border-radius: 18px 18px 0 18px;
    display: inline-block;
    margin-bottom: 15px;
    max-width: 60%;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    animation: ${fadeIn} 0.3s ease-out;
    font-weight: 500;
  }

  .question img.question-image {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-left: 10px;
    object-fit: cover;
    border: 2px solid white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .answer {
    text-align: left;
    background-color: white;
    padding: 15px 18px;
    border-radius: 18px 18px 18px 0;
    display: inline-block;
    margin-bottom: 25px;
    max-width: 70%;
    margin-right: auto;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    border-left: 3px solid #00cec9;
    color: #4a5568;
    line-height: 1.6;
    animation: ${fadeIn} 0.5s ease-out;
  }

  .input-container {
    position: relative;
    margin-bottom: 20px;
    animation: ${fadeIn} 0.8s ease-out;
  }

  textarea {
    width: 100%;
    height: 120px;
    padding: 15px;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    resize: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    font-family: inherit;
    color: #2d3748;

    &:focus {
      outline: none;
      border-color: #00cec9;
      box-shadow: 0 0 0 3px rgba(0, 206, 201, 0.2);
    }

    &::placeholder {
      color: #a0aec0;
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    animation: ${fadeIn} 0.9s ease-out;
  }

  button {
    background: linear-gradient(90deg, #00cec9, #0984e3);
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(1px);
    }

    &:disabled {
      background: linear-gradient(90deg, #cbd5e0, #a0aec0);
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }

  .info {
    color: #718096;
    font-size: 1rem;
    margin-top: 15px;
    text-align: center;
    line-height: 1.6;
    animation: ${fadeIn} 1s ease-out;
    padding: 15px;
    background-color: #f8fafc;
    border-radius: 10px;
    border-left: 3px solid #00cec9;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #718096;
    font-size: 1.1rem;
    text-align: center;
    padding: 30px;
    line-height: 1.6;
  }

  .empty-state-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #00cec9;
    animation: ${pulse} 2s infinite;
  }
`;

const GenerateContent = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [savedChats, setSavedChats] = useState([]);
  const [currentChatKey, setCurrentChatKey] = useState(null);

  const apiKey = "AIzaSyCmZo3BPYdF1bVl7bvXC_Zbo9xQENxWxBs";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedChats")) || [];
    setSavedChats(saved);
  }, []);

  const saveToLocalStorage = (newChatKey, newResponse, userInput) => {
    const updatedChats = savedChats.map((chat) => {
      if (chat.key === newChatKey) {
        const newResponseKey = `text${chat.responses.length + 1}`;
        const newResponseObject = {
          [newResponseKey]: { question: userInput, answer: newResponse },
        };
        return {
          ...chat,
          responses: [...chat.responses, newResponseObject],
        };
      }
      return chat;
    });

    localStorage.setItem("savedChats", JSON.stringify(updatedChats));
    setSavedChats(updatedChats);
  };

  const startNewChat = () => {
    const newChatKey = `chat_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    setCurrentChatKey(newChatKey);
    setResponse([]);
    setSearch("");

    const newChat = {
      key: newChatKey,
      responses: [],
    };
    const updatedChats = [...savedChats, newChat];
    localStorage.setItem("savedChats", JSON.stringify(updatedChats));
    setSavedChats(updatedChats);
  };

  const generateContent = async () => {
    setLoading(true);
    const requestBody = {
      contents: [
        {
          parts: [{ text: `${search}` }],
        },
      ],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      const content = data.candidates[0].content.parts[0].text;

      if (content) {
        const newResponse = { question: search, answer: content };
        setResponse((prev) => [...prev, newResponse]);
        if (currentChatKey) {
          saveToLocalStorage(currentChatKey, content, search);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadSavedChat = (chatKey) => {
    const savedChat = savedChats.find((chat) => chat.key === chatKey);
    if (savedChat) {
      const allResponses = savedChat.responses.map((responseObj, index) => {
        const { question, answer } = Object.values(responseObj)[0];
        return { question, answer };
      });

      setResponse(allResponses);
      setCurrentChatKey(chatKey);
    }
  };

  const deleteChat = (chatKey) => {
    const updatedChats = savedChats.filter((chat) => chat.key !== chatKey);
    localStorage.setItem("savedChats", JSON.stringify(updatedChats));
    setSavedChats(updatedChats);
    if (currentChatKey === chatKey) {
      setCurrentChatKey(null);
      setResponse([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      if (currentChatKey && search.trim()) {
        generateContent();
      }
    }
  };

  return (
    <Container>
      <Sidebar>
        <h2>FaizanTalks</h2>
        <button onClick={startNewChat}>New Chat</button>
        <ul className="chat-list">
          {savedChats.map((chat, i) => (
            <li key={chat.key}>
              <span
                className="chat-text"
                onClick={() => loadSavedChat(chat.key)}
              >
                Chat-{i + 1}
              </span>
              <div className="delete-icon" onClick={() => deleteChat(chat.key)}>
                <DeleteOutlined />
              </div>
            </li>
          ))}
        </ul>
      </Sidebar>

      <MainContent>
        <h1>Hey! What can I help with?</h1>
        <div className="response-section">
          {response && response.length > 0 ? (
            response.map((res, index) => (
              <div key={index}>
                <div className="question">
                  {res.question}
                  <img
                    className="question-image"
                    src="https://etimg.etb2bimg.com/photo/100088163.cms"
                    alt="User"
                  />
                </div>
                <div className="answer">{res.answer}</div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">💬</div>
              <p>No responses yet. Start a new conversation!</p>
              <p>Ask me anything about code, text, or general knowledge.</p>
            </div>
          )}
        </div>

        <div>
          <textarea
            placeholder="Write code or text here... (Ctrl+Enter to send)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={!currentChatKey}
          />
        </div>

        <div className="button-container">
          {currentChatKey ? (
            <button
              onClick={generateContent}
              disabled={loading || !currentChatKey || !search.trim()}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          ) : (
            <div className="info">
              Please click New Chat before generating content.
              <br />
              Or select an existing chat from the sidebar.
            </div>
          )}
        </div>
      </MainContent>
    </Container>
  );
};

export default GenerateContent;
