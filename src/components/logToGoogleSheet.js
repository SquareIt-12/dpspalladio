export const logToGoogleSheet = async (data) => {
  const sheetURL =
    "https://script.google.com/macros/s/AKfycbxY8vgBQyds6j_CoRHjhqAB3givsZx9HQNr_brW3LnsOFsChhq07dGC2P-32WXcsV5X/exec";

  try {
    await fetch(sheetURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("✅ Google Sheet log success");
  } catch (err) {
    console.error("❌ Google Sheet log failed", err);
  }
};
