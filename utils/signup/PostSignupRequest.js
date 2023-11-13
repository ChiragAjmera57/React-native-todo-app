export function signUpUser({ name, email, password }) {
    return new Promise((resolve, reject) => {
      const apiUrl = 'http://192.168.40.176:8080/signup';
      const userData = {
        name,
        email,
        password,
      };
     
  
      // Make a POST request to the server using fetch
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You can include additional headers here if needed
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          // Check if the response status is in the range 200-299 (success)
          if (response.ok) {
            // Parse the JSON in the response
            return response.json();
          } else {
            // Handle error - Display an error message or take appropriate action.
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        })
        .then((data) => {
          // Handle success - You can navigate to another page or display a success message.
          resolve(data); // Resolve the promise with the response data
        })
        .catch((error) => {
          // Handle error - Display an error message or take appropriate action.
          reject(error); // Reject the promise with the error data
        });
    });
  }
  