import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Referral {
    id: string;
    name: string;
    jd: string;
    resume: string;
}

export default function App() {
    const navigate = useNavigate();
    const [referrals] = useState<Referral[]>(
        JSON.parse(localStorage.getItem("referrals") || "[]")
    );

    const handleNavigateRequest = () => {
        navigate("/request");
    };

    const handleOpenDetails = (id: string) => {
        navigate(`/details/${id}`);
    };

    return (
        <div
            style={{
                padding: "20px",
                width: "340px",
                backgroundColor: "#121212",
                borderRadius: "12px",
                color: "#e0e0e0",
                fontFamily: "'Segoe UI', sans-serif",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
            }}
        >
            <h3 style={{ marginTop: 0, fontSize: "1.6rem", color: "#ffffff", marginBottom: "12px" }}>
                ReferLoop
            </h3>

            <button
                onClick={handleNavigateRequest}
                style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "none",
                    background: "linear-gradient(135deg, #2f80ed, #1c3a7c)",
                    color: "white",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                onMouseOver={(e) =>
                    (e.currentTarget.style.background =
                        "linear-gradient(135deg, #1c3a7c, #2f80ed)")
                }
                onMouseOut={(e) =>
                    (e.currentTarget.style.background =
                        "linear-gradient(135deg, #2f80ed, #1c3a7c)")
                }
            >
                Request Referral
            </button>

            <h4 style={{ color: "#cccccc", marginTop: "24px", fontSize: "1.2rem" }}>
                Submitted Referrals
            </h4>

            {referrals.length === 0 ? (
                <p style={{ color: "#aaaaaa" }}>No referrals yet.</p>
            ) : (
                <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    {referrals.map((r) => (
                        <li
                            key={r.id}
                            style={{
                                cursor: "pointer",
                                marginBottom: "8px",
                                color: "#90caf9",
                                transition: "color 0.2s",
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.color = "#bbdefb")}
                            onMouseOut={(e) => (e.currentTarget.style.color = "#90caf9")}
                            onClick={() => handleOpenDetails(r.id)}
                        >
                            {r.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
