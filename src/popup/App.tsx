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
        <div style={{ padding: "20px", width: "300px" }}>
            <h3>ReferLoop</h3>
            <button onClick={handleNavigateRequest}>Request Referral</button>

            <h4 style={{ marginTop: "20px" }}>Submitted Referrals</h4>
            {referrals.length === 0 ? (
                <p>No referrals yet.</p>
            ) : (
                <ul>
                    {referrals.map((r) => (
                        <li
                            key={r.id}
                            style={{ cursor: "pointer", marginBottom: "10px", color: "blue" }}
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
