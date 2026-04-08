export async function submitHtmlForm(form: HTMLFormElement) {
  const response = await fetch(form.action, {
    method: form.method || "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Form submission failed.");
  }
}
