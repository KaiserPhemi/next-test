"use client";
import { useState, useEffect } from "react";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [apiData, setApiData] = useState<null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      // https://edm-api.vdldemo.top/auth/login"
      //http://165.232.41.222:6700/auth/login
      const res = await fetch("https://edm-api.vdldemo.top/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });
      if (!res.ok) {
        throw new Error("Login failed");
      }
      const data = await res.json();
      setApiData(data);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };
  return (
    <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Phone Number:</label>
        <input
          type="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: "16px" }}>
        Login
      </button>
      <div>{apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}</div>
    </form>
  );
}
