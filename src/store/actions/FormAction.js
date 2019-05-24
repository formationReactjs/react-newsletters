export function setForm(form) {
    return {
      type: "SET-FORM",
      email: form.email,
      checkbox: form.checkbox
    }
  }

