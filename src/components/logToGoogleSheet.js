export const logToGoogleSheet = async (data) => {
  const sheetURL =
    "https://script.google.com/macros/s/AKfycbwRa6yBx450vS3hGtR-1MGWSFmidoAmPDS7aJkMX2tFsNrxktzx_ozJs-XOTs1aIJWH/exec";

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
    console.error("❌ Google Sheet log failed",err);
 }
};