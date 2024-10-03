
import Link from "next/link";

export default function About() {
  return (
    <>
      

      {/* About Us Page Content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F7F9FC",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#333",
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          About Us
        </h1>
        <p
          style={{
            color: "#555",
            fontSize: "18px",
            maxWidth: "700px",
            textAlign: "center",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          Welcome to our website dedicated to providing insightful information
          about South Asian countries. We are passionate about sharing the rich
          history, diverse cultures, and the vibrant communities of countries in
          South Asia. Whether you're here to learn about the culture, geography,
          or the people, we hope you find the information valuable and
          interesting.
        </p>

          <h2
            style={{
              color: "#007BFF",
              fontSize: "24px",
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            What We Offer
          </h2>
          <ul
            style={{
              color: "#333",
              fontSize: "16px",
              lineHeight: "1.8",
              listStyleType: "circle",
              paddingLeft: "20px",
            }}
          >
            <li>In-depth articles on South Asian history and culture</li>
            <li>Travel guides and tips for visiting South Asian countries</li>
            <li>
              Insights into the economic, political, and social developments
              across South Asia
            </li>
            <li>Curated resources to help people connect with South Asian communities</li>
          </ul>

          
          {/* Navbar */}
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          padding: "10px",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/aboutus">About us</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/contactus">Contact us</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>
      </div>
        </div>
      
    </>
  );
}