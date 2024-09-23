document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const historyList = document.getElementById('history-list');
  
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  
    
    const updateHistoryDisplay = () => {
      historyList.innerHTML = '';
      searchHistory.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
      });
    };
  
    
    updateHistoryDisplay();
  
    
    searchBtn.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        searchHistory.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        updateHistoryDisplay();
        searchInput.value = ''; 
      }
    });
  
 
    clearBtn.addEventListener('click', () => {
      searchHistory = [];
      localStorage.removeItem('searchHistory');
      updateHistoryDisplay();
    });
  });
  