// Piccoli miglioramenti
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Link allo store: aggiorna quando pubblichi
document.getElementById("storeLink").addEventListener("click", (e) => {
  // Reindirizza a un link placeholder dello store
  window.location.href =
    "https://chrome.google.com/webstore/detail/placeholder-link";
});

// Privacy modal
const privacyLink = document.getElementById("privacyLink");
const privacySection = document.getElementById("privacy");
const closePrivacy = document.getElementById("closePrivacy");
if (privacyLink && privacySection && closePrivacy) {
  privacyLink.addEventListener("click", function (e) {
    e.preventDefault();
    privacySection.style.display = "block";
  });
  closePrivacy.addEventListener("click", function () {
    privacySection.style.display = "none";
  });
  // Chiudi anche cliccando fuori dal box
  privacySection.addEventListener("click", function (e) {
    if (e.target === privacySection) privacySection.style.display = "none";
  });
}
