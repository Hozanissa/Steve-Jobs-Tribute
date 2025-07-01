const quotes = [
    "Innovation distinguishes between a leader and a follower.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Stay hungry. Stay foolish.",
     "The only way to do great work is to love what you do.",
     "Sometimes life hits you in the head with a brick. Don’t lose faith."
  ];
  
  function showQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[index];
  }
  window.onload = showQuote;
  
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      window.open(img.src, '_blank');
    });
  });