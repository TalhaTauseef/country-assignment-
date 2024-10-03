import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "lightgreen",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
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

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px", // Adjust to push the content below the navbar
        }}
      >
        <p
          style={{
            color: "black",
            fontSize: "50px",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Welcome to South Asian Countries by{" "}
          <strong>
            <i style={{ color: "blue" }}>&quot;Talha Tauseef&quot;</i>
          </strong>
        </p>

        <Link href="./country">
          <button
            style={{
              color: "white",
              textAlign: "center",
              backgroundColor: "blue",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingRight: "20px",
              paddingLeft: "20px",
              borderRadius: "10px",
              margin: "20px",
              fontWeight: "bold",
            }}
          >
            Country Page
          </button>
        </Link>
      </div>
    </div>
  );
}
