import toast from "react-hot-toast";

const isValidEmail = (email) => {
  // Simple email validation regex
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export const validateForm = (form,setIsFormSubmitted) => {
  const isAnyFieldMissing =
    !form.name || !form.email || !form.phone || !form.reason || !form.message;

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
    submitForm(form,setIsFormSubmitted),
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

const submitForm = async (form, setIsFormSubmitted) => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiBase = import.meta.env.VITE_APP_AIRTABLE_BASE;
  const apiTable = import.meta.env.VITE_APP_CONTACT_FORM_AIRTABLE_TABLE;
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
        Reason: form.reason,
        Phone: form.phone,
        Message: form.message,
        Communication_Method:form.communication_method
      },
    }),
  });

  const json = await response.json();
  console.log(response,json);

  if (json.error) {
    return Promise.reject(json.error);
  }else{
    setIsFormSubmitted(true);
  }
  
};
