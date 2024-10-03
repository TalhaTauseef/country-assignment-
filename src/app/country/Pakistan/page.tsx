import CountryList from "../page";
import Link from "next/link";

export default function Pakistan() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#E8F4FA",
      }}
    >
      <h1
        style={{
          color: "#00C853",
          fontSize: "35px",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#002B36",
          fontWeight: "bolder",
        }}
      >
        Welcome to Pakistan!
      </h1>
     
     

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          color: "#004D40",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            color: "#00796B",
            marginBottom: "15px",
          }}
        >
          Discover the Beauty and Culture of Pakistan
        </h2>
        <p
          style={{
            maxWidth: "800px",
            fontSize: "18px",
            lineHeight: "1.6",
            textAlign: "justify",
            paddingBottom: "20px",
          }}
        >
          Pakistan, a country of rich cultural heritage and stunning landscapes,
          is located in South Asia. Known for its majestic mountains, lush
          valleys, and vibrant cities, Pakistan offers a blend of tradition and
          modernity. From the ancient city of Mohenjo-Daro to the bustling
          streets of Lahore and the serene beauty of the Karakoram Range,
          Pakistan is a place where history and nature come alive.
        </p>

        <h3
          style={{
            fontSize: "22px",
            color: "#004D40",
            marginTop: "20px",
          }}
        >
          Key Highlights:
        </h3>
        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textAlign: "left",
            listStyleType: "circle",
            marginTop: "10px",
            padding: "0 40px",
          }}
        >
          <li>
            <strong>Capital:</strong> Islamabad
          </li>
          <li>
            <strong>Official Language:</strong> Urdu, English
          </li>
          <li>
            <strong>Population:</strong> 240+ million (2024)
          </li>
          <li>
            <strong>Major Attractions:</strong> Badshahi Mosque, Hunza Valley,
            Karachi's beaches, Skardu, and the historical city of Taxila.
          </li>
          <li>
            <strong>Famous Food:</strong> Biryani, Nihari, Chapli Kebab, and
            Karahi.
          </li>
        </ul>
      </div>
    </div>
  );
}