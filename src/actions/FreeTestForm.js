import toast from "react-hot-toast";

const isValidEmail = (email) => {
  // Simple email validation regex
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export const ValidateAndSubmit = (form , setIsFormSubmitted) => {
  const isAnyFieldMissing =
    !form.name || !form.email || !form.phone || !form.date || !form.time;

  if (isAnyFieldMissing) {
    return toast.error("All fields are required");
  }

  if (!isValidEmail(form.email)) {
    return toast.error("Invalid email address");
  }

  if (form.phone.length !== 10) {
    return toast.error("Invalid phone number");
  }

  // If all validations pass, submit the form

  toast.promise(
    SubmitForm(form,setIsFormSubmitted),
    {
      loading: "Submitting form...",
      success: "Form submitted successfully",
      error: "Failed to submit form",
    },
    {
      style: {
        minWidth: "250px",
      },
    }
  );
};

const SubmitForm = async (form,setIsFormSubmitted) => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiBase = import.meta.env.VITE_APP_AIRTABLE_BASE;
  const apiTable = import.meta.env.VITE_APP_TEST_FORM_AIRTABLE_TABLE;
  const apiToken = import.meta.env.VITE_APP_AIRTABLE_TOKEN;

  const response = await fetch(`${apiUrl}/${apiBase}/${apiTable}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify({
      fields: {
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        Date: form.date,
        Time: form.time,
      },
    }),
  });

  const json = await response.json();
  console.log(response,json);

  if (json.error) {
    return Promise.reject(json.error);
  }

  setIsFormSubmitted(true);
};
