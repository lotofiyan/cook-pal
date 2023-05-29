import { apiInstance2 } from "utils/apiInstance";

const apis = {
  getPopular: (numberOfRecipes) =>
    apiInstance2(`recipes/popular?number=${numberOfRecipes}`),

  sendOtp: (data) =>
    apiInstance2("internal/send-otp", {
      method: "POST",
      body: data,
      internal: true,
    }),

  verifyOtp: (data) =>
    apiInstance2("auth/verify", {
      method: "POST",
      body: data,
    }),
};

export default apis;
