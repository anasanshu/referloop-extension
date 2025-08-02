import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RequestReferral() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [jd, setJd] = useState("");
    const [resume, setResume] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newReferral = {
            id: Date.now().toString(),
            name,
            jd,
            resume
        };

        const current = JSON.parse(localStorage.getItem("referrals") || "[]");
        const updated = [...current, newReferral];
        localStorage.setItem("referrals", JSON.stringify(updated));

        // In real scenario: send POST to backend

        navigate("/");
    };

    return (
        <div style={{ padding: "20px", width: "300px" }}>
            <h3>Request Referral</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Candidate Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />
                <textarea
                    placeholder="Job Description"
                    value={jd}
                    onChange={(e) => setJd(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />
                <input
                    placeholder="Resume Link"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
}
