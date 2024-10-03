export default function China() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#F5EFE7",
        }}
      >
        <h1
          style={{
            color: "#FF0000",
            fontSize: "35px",
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "#FFD700",
            fontWeight: "bolder",
          }}
        >
          Welcome to China!
        </h1>
  
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            color: "#000000",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              color: "#B71C1C",
              marginBottom: "15px",
            }}
          >
            Discover the Ancient Wonders of China
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
            China, one of the world’s oldest civilizations, is located in East
            Asia. With a rich history spanning thousands of years, China is known
            for its architectural marvels, technological advancements, and
            cultural heritage. From the Great Wall to the Terracotta Warriors and
            the dynamic cities like Beijing and Shanghai, China offers a blend of
            history, culture, and innovation.
          </p>
  
          <h3
            style={{
              fontSize: "22px",
              color: "#D32F2F",
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
              <strong>Capital:</strong> Beijing
            </li>
            <li>
              <strong>Official Language:</strong> Mandarin Chinese
            </li>
            <li>
              <strong>Population:</strong> 1.4+ billion (2024)
            </li>
            <li>
              <strong>Major Attractions:</strong> The Great Wall, Forbidden City,
              Zhangjiajie National Park, and the Yangtze River.
            </li>
            <li>
              <strong>Famous Food:</strong> Peking Duck, Dim Sum, Kung Pao Chicken,
              and Hot Pot.
            </li>
          </ul>
        </div>
      </div>
    );
  }
