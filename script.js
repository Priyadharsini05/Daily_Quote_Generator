document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      "Every sunrise is a second chance to chase your dreams.",
      "Progress is made one small step at a time—keep moving.",
      "You don’t need perfect conditions to start; start to make conditions perfect.",
      "The courage to begin is the first victory.",
      "Discipline is the bridge between intentions and accomplishments.",
      "Turn your 'someday' into today—action creates momentum.",
      "You are stronger than your excuses and bigger than your fears.",
      "Small efforts each day lead to big achievements tomorrow.",
      "Your future is created by what you do now, not later.",
      "Believe in the power of yet—‘I haven’t… yet’ is a promise, not a failure."
    ];
  
    const quoteBox = document.getElementById("quoteBox");
    const nextQuoteBtn = document.getElementById("nextQuoteBtn");
  
    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];
  
      quoteBox.classList.remove('fade-in');
      quoteBox.classList.add('fade-out');
  
      setTimeout(() => {
        quoteBox.textContent = `"${newQuote}"`;
        quoteBox.classList.remove('fade-out');
        quoteBox.classList.add('fade-in');
      }, 300);
    }
  
    nextQuoteBtn.addEventListener('click', showRandomQuote);
  
    showRandomQuote();
  });
  
