fetch('http://localhost:3001/employees')
  .then((response) => response.json())
  .then((data) => {
    console.log('API response:', data);
  })
  .catch((error) => {
    console.error('Error fetching employee data:', error);
  });
