document.addEventListener("DOMContentLoaded", function() {
  
  // Add a Cute Welcome Message Banner
  let welcomeMsg = document.createElement("div");
  welcomeMsg.innerHTML = `
    <div style='background:#ffccbc;color:#5d4037;padding:10px;text-align:center;font-size:16px;font-weight:bold;'>
      🍼 Welcome to Little Love Baby Boutique! Enjoy 10% OFF with code <b>CUTEBABY10</b> 🍼
    </div>`;
  document.body.insertBefore(welcomeMsg, document.body.firstChild);

  // Add a Floating "Chat With Us" Button
  let chatButton = document.createElement("div");
  chatButton.innerHTML = `
    <div style='position:fixed;bottom:20px;right:20px;background:#ff9800;color:white;padding:12px 20px;border-radius:30px;cursor:pointer;font-weight:bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);'>
      💬 Need Help? Chat with Us!
    </div>`;
  chatButton.onclick = function() {
    alert("We're here to help! Message us for sizing and product recommendations. 🍼✨");
  };
  document.body.appendChild(chatButton);

  // Change Homepage Banner Text Dynamically
  let bannerText = document.querySelector(".homepage-banner h1");
  if (bannerText) {
    bannerText.innerHTML = "👶 Welcome to the Softest & Cutest Baby Clothing Store! 🎀";
  }
  
});
