export function checkPasswordStrength(password) {
  let strength = 0;
  let passwordDetails = { text: "", width: "", background: "" };
  if (password.length >= 8) strength++;
  if (password.length > 12) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;

  switch (strength) {
    case 1:
      passwordDetails.text = "Very Weak";
      passwordDetails.width = "w-1/6";
      passwordDetails.background = "bg-red-500";
      break;
    case 2:
      passwordDetails.text = "Weak";
      passwordDetails.width = "w-2/6";
      passwordDetails.background = "bg-orange-500";
      break;
    case 3:
      passwordDetails.text = "Fair";
      passwordDetails.width = "w-3/6";
      passwordDetails.background = "bg-yellow-500";
      break;
    case 4:
      passwordDetails.text = "Good";
      passwordDetails.width = "w-4/6";
      passwordDetails.background = "bg-lime-500";
      break;
    case 5:
      passwordDetails.text = "Strong";
      passwordDetails.width = "w-5/6";
      passwordDetails.background = "bg-primary-400";
      break;
    case 6:
      passwordDetails.text = "Very Strong";
      passwordDetails.width = "w-full";
      passwordDetails.background = "bg-lime-600";
      break;
  }

  return passwordDetails;
}
