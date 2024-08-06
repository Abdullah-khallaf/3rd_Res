document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = document.getElementById('resultForm');
    var formData = new FormData(form);

    fetch('/your-backend-endpoint', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      
      document.getElementById('result_name').textContent = data.name;
      document.getElementById('result_place_number').textContent = data.place_number;
      document.getElementById('result_score').textContent = data.score;
      document.getElementById('result_status').textContent = data.status;

      
      document.getElementById('resultSection').style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
      
    });
  });