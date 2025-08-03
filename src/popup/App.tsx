import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

interface Referral {
    id: string;
    todo: string;
    completed: string;
    userId: string;
    // status: string;
}

export default function App() {
    const navigate = useNavigate();
    const [referrals, setReferrals] = useState<Referral[]>([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchReferrals() {
            try {
                const response = await fetch(
                    // "https://referral-loop-production.up.railway.app/referrals/inbox?userId=user2"
                    "https://dummyjson.com/todos?limit=3&skip=10"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                // Assuming API returns an array of referrals
                setReferrals(data["todos"]);
            } catch (err: any) {
                // setError(err.message);
            } finally {
                // setLoading(false);
            }
        }

        fetchReferrals();
    }, []);

    const handleNavigateRequest = () => {
        navigate("/request");
    };

    const handleOpenDetails = (id: string) => {
        navigate(`/details/${id}`);
    };

    // if (loading) {
    //     return <div style={{ padding: "20px", width: "300px" }}>Loading referrals...</div>;
    // }
    //
    // if (error) {
    //     return <div style={{ padding: "20px", width: "300px" }}>Error: {error}</div>;
    // }

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
                            {r.todo}
                            {/*{r.name} – {r.jd?.slice(0, 15) || "No JD"}...*/}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
