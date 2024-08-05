document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var form = document.getElementById('resultForm');
    var formData = new FormData(form);

    fetch('/your-backend-endpoint', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Update UI with fetched data
      document.getElementById('result_name').textContent = data.name;
      document.getElementById('result_place_number').textContent = data.place_number;
      document.getElementById('result_score').textContent = data.score;
      document.getElementById('result_status').textContent = data.status;

      // Show the result section
      document.getElementById('resultSection').style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error scenario
    });
  });