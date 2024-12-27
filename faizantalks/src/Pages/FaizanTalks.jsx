import { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { apiUrl } from "../api/api";
const Container = styled.div`
  display: flex;
  height: 95vh;
  background-color: #f5f7fa;
`;

const Sidebar = styled.aside`
  width: 200px;
  background-color: #1a202c;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  border-radius: 10px;
  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 5px; /* Scrollbar width */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1a202c; /* Scrollbar thumb color */
    border-radius: 10px; /* Rounded edges */
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5; /* Optional: Track background color */
  }

  button {
    background-color: #00cec9;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0984e3;
    }
  }

  .chat-list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
  }

  .chat-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;
  }

  .chat-text {
    cursor: pointer;
    flex: 1;
  }

  .delete-icon {
    cursor: pointer;
    color: #ff5c5c;
    border-radius: 4px;
    font-size: 16px;
    margin-left: 15px;
  }

  .delete-icon:hover {
    background-color: #ff5c5c;
    color: white;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  overflow-y: auto;

  h1 {
    color: #2d3436;
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.25rem;
  }

  .response-section {
    margin-bottom: 20px;
    text-align: right;
    height: 60vh;
    overflow-y: auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 5px;

    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
      width: 5px; /* Scrollbar width */
    }

    &::-webkit-scrollbar-thumb {
      background-color: grey; /* Scrollbar thumb color */
      border-radius: 10px; /* Rounded edges */
    }

    &::-webkit-scrollbar-track {
      background-color: #f5f5f5; /* Optional: Track background color */
    }
  }

  .question {
    text-align: right;
    background-color: #dfe6e9;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
    max-width: 60%;
    margin-left: auto;
    display: flex;
    align-items: center; /* Align text and image vertically */
    justify-content: flex-end; /* Align content to the right */
  }

  .question img.question-image {
    width: 25px;
    height: 25px;
    border-radius: 50%; /* Make the image circular */
    margin-left: 10px; /* Add space between text and image */
    object-fit: cover; /* Ensure the image fills the circular container */
  }
  .answer {
    text-align: left;
    background-color: #b2bec3;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;
    max-width: 60%;
    margin-right: auto;
  }

  textarea {
    width: 96%;
    height: 100px;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #b2bec3;
    border-radius: 5px;
    margin-bottom: 20px;
    resize: none;

    &:focus {
      outline: none;
      border-color: #00cec9;
    }
  }

  button {
    background-color: #00cec9;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 120px;

    &:hover {
      background-color: #0984e3;
    }

    &:disabled {
      background-color: #b2bec3;
      cursor: not-allowed;
    }
  }

  .info {
    color: #636e72;
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

export default function FaizanTalks() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [savedChats, setSavedChats] = useState([]);
  const [currentChatKey, setCurrentChatKey] = useState(null);

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
      const allResponses = savedChat.responses.map((responseObj) => {
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
                    style={{ width: "20px" }}
                    src="https://etimg.etb2bimg.com/photo/100088163.cms"
                    alt=""
                  />
                </div>
                <br />
                <div className="answer">{res.answer}</div>
              </div>
            ))
          ) : (
            <div style={{ padding: "20px", fontSize: "16px", color: "#888" }}>
              No responses yet. Be the first to send a message! 😊
            </div>
          )}
        </div>
        <textarea
          placeholder="Write code or text here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {currentChatKey && (
          <button
            onClick={generateContent}
            disabled={loading || !currentChatKey}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        )}

        {!currentChatKey && (
          <div className="info">
            Please click New Chat before generating content.
            <br />
            Or
            <br />
            you can continue with an existing chat.
          </div>
        )}
      </MainContent>
    </Container>
  );
}
