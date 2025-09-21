import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/Auth.context";
import { sendDataToLogin } from "../../Services/auth-service";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await sendDataToLogin(formData);

      if (res.success && res.data.token) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        toast.success("✅ Logged in successfully!");
        navigate("/"); // هنا بعد اللوجين يرجعه للـ Home
      }
    } catch (err) {
      toast.error(err.message || "❌ Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700"
        >
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
}
