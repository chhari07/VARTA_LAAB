// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const Q_A = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, question: null });

  const API_BASE_URL = "http://localhost:5000";

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await fetch(API_BASE_URL);
      if (!res.ok) throw new Error("Failed to fetch questions");
      const data = await res.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const addQuestion = async () => {
    if (!newQuestion.trim() || !userName.trim()) return;

    if (questions.some(q => q.question.toLowerCase() === newQuestion.toLowerCase())) {
      alert("This question has already been asked.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: newQuestion, user: userName }),
      });
      if (!res.ok) throw new Error("Failed to add question");

      const data = await res.json();
      setQuestions([...questions, data]);
      setNewQuestion("");
      setUserName("");
    } catch (error) {
      console.error("Error adding question:", error);
    } finally {
      setLoading(false);
    }
  };

  const addAnswer = async (id) => {
    if (!newAnswer.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/${id}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: newAnswer }),
      });
      if (!res.ok) throw new Error("Failed to add answer");

      const updatedQuestion = await res.json();
      setQuestions(questions.map(q => (q._id === id ? updatedQuestion : q)));
      setModalState({ isOpen: true, question: updatedQuestion });
      setNewAnswer("");
    } catch (error) {
      console.error("Error adding answer:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (q) => {
    setModalState({ isOpen: true, question: q });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, question: null });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-black flex flex-col font-sans">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
            <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 mb-3 border rounded-lg bg-gray-100 text-black"
            />
            <input
              type="text"
              placeholder="Type your question..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-100 text-black"
            />
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-3 w-full"
              onClick={addQuestion}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions.length > 0 ? (
              questions.map((q) => (
                <div
                  key={q._id}
                  className="p-5 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 shadow-md cursor-pointer"
                  onClick={() => openModal(q)}
                >
                  <h3 className="text-lg font-semibold">{q.user}</h3>
                  <p className="mt-2">{q.question}</p>
                  <p className="text-sm text-gray-500 mt-2">{q.answers.length} Answers</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-2">No questions yet.</p>
            )}
          </div>
        </div>
      </div>

      {modalState.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold">{modalState.question.question}</h2>
            <p className="text-sm text-gray-500">Asked by: {modalState.question.user}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Answers</h3>
              {modalState.question.answers.map((ans, index) => (
                <p key={index} className="mt-2 border p-2 rounded-md bg-gray-100">{ans}</p>
              ))}
              <input
                type="text"
                placeholder="Your Answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="w-full p-2 border rounded-lg mt-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2" onClick={() => addAnswer(modalState.question._id)}>Submit Answer</button>
            </div>

            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Q_A;
