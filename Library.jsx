import React, { useState } from "react";
import { library } from "../data/library";

export default function Library() {
  const [results, setResults] = useState(library);

  // Filter by branch
  const showCategory = (branch) => {
    setResults(library.filter((book) => book.branch === branch));
  };

  // Search by title or author
  const searchBook = (query) => {
    setResults(
      library.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // Home button resets to all books
  const goHome = () => {
    setResults(library);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", color: "#0078d7" }}>📚 College Library</h2>

      {/* Category Buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={goHome} style={btnStyle}>🏠 Home</button>
        <button onClick={() => showCategory("ECE")} style={btnStyle}>⚡ ECE</button>
        <button onClick={() => showCategory("EEE")} style={btnStyle}>🔌 EEE</button>
        <button onClick={() => showCategory("CSE")} style={btnStyle}>💻 CSE</button>
        <button onClick={() => showCategory("Civil")} style={btnStyle}>🏗 Civil</button>
      </div>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="Search book by title or author"
          onChange={(e) => searchBook(e.target.value)}
          style={{
            padding: "10px",
            width: "60%",
            borderRadius: "8px",
            border: "2px solid #0078d7",
            outline: "none",
          }}
        />
      </div>

      {/* Book Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {results.length > 0 ? (
          results.map((book, index) => (
            <div
              key={index}
              style={{
                width: "220px",
                border: "2px solid #0078d7",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease",
                textAlign: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Subject name image */}
              <div
                style={{
                  backgroundColor: "#e0f7fa",
                  borderRadius: "6px",
                  padding: "20px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "#0078d7",
                }}
              >
                {book.title}
              </div>

              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Branch:</strong> {book.branch}</p>
              <p><strong>Location:</strong> {book.floor}</p>
              <p><strong>Shelf:</strong> {book.shelf}</p>
              <p><strong>Row:</strong> {book.row}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>❌ No books found</p>
        )}
      </div>
    </div>
  );
}

// 🔹 Button styling
const btnStyle = {
  margin: "5px",
  padding: "10px 15px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#0078d7",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};
