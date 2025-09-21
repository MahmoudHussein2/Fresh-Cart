import { useState } from "react";
import { toast } from "react-toastify";
import { sendDataToSignup } from "../../Services/auth-service";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await sendDataToSignup(formData);

      if (res.success && res.data.message === "success") {
        toast.success("✅ Account created successfully!");
        navigate("/Login"); // بعد التسجيل يروح صفحة اللوجين
      }
    } catch (err) {
      toast.error(err.message || "❌ Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
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
        <input
          type="password"
          name="rePassword"
          placeholder="Confirm Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
