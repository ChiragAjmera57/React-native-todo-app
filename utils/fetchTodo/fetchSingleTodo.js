export function fetchsingletodo(id) {
    return new Promise((resolve, reject) => {
      // Get the authentication token from local storage
  
  
      // Set up the request with the token in the headers
     
  
      fetch(`http://192.168.40.176:8080/fetch-tasks-id/${id}`, { method: 'GET' })
        .then((response) => {
          if (!response.ok) {
            reject('Request failed with status: ' + response.status);
            return;
          }
  
          // Parse the response data as JSON
          return response.json();
        })
        .then((data) => {
          // Resolve the promise with the data
          resolve(data);
        })
        .catch((error) => {
          // Reject the promise with the error
          reject(error);
        });
    });
  }
  
  // Example usage

  