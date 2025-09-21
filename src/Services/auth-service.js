
import { apiClient } from "../Utils/ApiClient";

export async function sendDataToSignup(values) {
  return await apiClient.request({
    method: "POST",
    url: "/auth/signup",
    data: {
      name: values.name,
      email: values.email,
      password: values.password,
      rePassword: values.rePassword,
      phone: values.phone,
    },
  });
}

export async function sendDataToLogin(values) {
  return await apiClient.request({
    method: "POST",
    url: "/auth/signin",
    data: values,
  });
}

export async function sendDataToForgetPassword(email) {
  return await apiClient.request({
    method: "POST",
    url: "/auth/forgotPasswords",
    data: { email },
  });
}

export async function sendDataToVerfiyCode(code) {
  return await apiClient.request({
    method: "POST",
    url: "/auth/verifyResetCode",
    data: { resetCode: code },
  });
}

export async function sendDataToResetPassword(values) {
  return await apiClient.request({
    method: "PUT",
    url: "/auth/resetPassword",
    data: {
      email: values.email,
      newPassword: values.password,
    },
  });
}

export async function resendResetCode(email) {
  return await apiClient.request({
    method: "POST",
    url: "/auth/forgotPasswords",
    data: { email },
  });
}
