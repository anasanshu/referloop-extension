import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Referral {
    id: string;
    name: string;
    jd: string;
    resume: string;
}

export default function ReferralDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [referral, setReferral] = useState<Referral | null>(null);

    useEffect(() => {
        const allReferrals: Referral[] = JSON.parse(localStorage.getItem("referrals") || "[]");
        const found = allReferrals.find((r) => r.id === id);
        setReferral(found || null);
    }, [id]);

    if (!referral) return <div style={{ padding: "20px" }}>Referral not found.</div>;

    const handleRefer = () => {
        alert(`Candidate ${referral.name} referred!`);
        navigate("/");
    };

    return (
        <div style={{ padding: "20px", width: "300px" }}>
            <h3>{referral.name}</h3>
            <p><b>Job Description:</b> {referral.jd}</p>
            <p><b>Resume:</b> <a href={referral.resume} target="_blank">View</a></p>
            <button onClick={handleRefer}>Refer Candidate</button>
        </div>
    );
}
