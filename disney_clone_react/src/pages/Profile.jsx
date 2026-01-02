import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import "../styles/profile_style.css";

export default function Profile() {
  const { user, loading, logout } = useAuth();

  const [frontName, setFrontName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFrontName(user.frontName || "");
      setLastName(user.lastName || "");
      setUsername(user.username || "");
      setEmail(user.email || "");
      
      // Convert ISO format ke yyyy-MM-dd
      if (user.birthdate) {
        const date = new Date(user.birthdate);
        const formattedDate = date.toISOString().split('T')[0];
        setBirthDate(formattedDate);
      } else {
        setBirthDate("");
      }
      
      setGender(user.gender || "");
    }
  }, [user]);

  if (loading) return null;
  if (!user) return <p>Silakan login</p>;

  return (
    <div className="background-img">
      <div className="profile-card">
        <h2>Profile Page</h2>
        <p style = {{marginTop : "5px"}}>Welcome, {user.username}</p>

        <p>Nama Depan</p>
        <input
        className="form-input"
        value={frontName}
        onChange={(e) => setFrontName(e.target.value)}
        />
        
        <p>Nama Belakang</p>
        <input
          className="form-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <p>Username</p>
        <input
          className="form-input"
          value={username}
          disabled
        />

        <p>Email</p>
        <input
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Password Baru</p>
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="error-text">{error}</p>}
        
        <p>Konfirmasi Password Baru</p>
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-text">{error}</p>}

        <p>Tanggal Lahir</p>
        <input
          type="date"
          className="form-input"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <p>Jenis Kelamin</p>
        <select
          className="form-input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled>Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
          <option value="Lainnya">Lainnya</option>
        </select>

        <div className="btn-container">
          <button className="btn-save" onClick={handleUpdate}>
            Simpan Perubahan
          </button>
          <button className="btn-logout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  async function handleUpdate() {
    const res = await fetch("http://localhost:5000/api/auth/profile", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        frontName,
        lastName,
        email,
        birthDate,
        gender,
        password: password || undefined,
      }),
    });
    
    if (res.ok) {
      const updatedUser = await res.json();
      alert("Profil berhasil diperbarui");
    } else {
      alert("Gagal memperbarui profil");
    }
  }
}
