import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Contact Us Page Content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0F4F8",
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
          Contact Us
        </h1>
        <p
          style={{
            color: "#555",
            fontSize: "18px",
            maxWidth: "600px",
            textAlign: "center",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          We'd love to hear from you! Whether you have a question about our
          services, need support, or just want to get in touch, feel free to
          reach out. You can contact us using the information below or through
          the contact form.
        </p>

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