import CountryList from "../page";


export default function India() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#F3F6FF",
      }}
    >
      <h1
        style={{
          color: "#FF9933",
          fontSize: "35px",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#000080",
          fontWeight: "bolder",
        }}
      >
        Welcome to India!
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          color: "#212121",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            color: "#D32F2F",
            marginBottom: "15px",
          }}
        >
          Explore the Diversity of India
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
          India, a land of cultural diversity, rich history, and vibrant colors,
          is located in South Asia. Known for its incredible festivals, diverse
          landscapes, and delicious cuisine, India offers a blend of the ancient
          and the modern. From the iconic Taj Mahal to the serene backwaters of
          Kerala and the bustling streets of Mumbai, India is a country that
          offers something for everyone.
        </p>

        <h3
          style={{
            fontSize: "22px",
            color: "#C62828",
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
            <strong>Capital:</strong> New Delhi
          </li>
          <li>
            <strong>Official Languages:</strong> Hindi, English
          </li>
          <li>
            <strong>Population:</strong> 1.4+ billion (2024)
          </li>
          <li>
            <strong>Major Attractions:</strong> Taj Mahal, Jaipur's palaces,
            Goa's beaches, Varanasi, and the Himalayas.
          </li>
          <li>
            <strong>Famous Food:</strong> Biryani, Masala Dosa, Butter Chicken,
            and Paneer Tikka.
          </li>
        </ul>
      </div>
    </div>
  );
}