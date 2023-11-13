export async function deleteTaskWithToken(taskId,authToken) {
    // Get the authentication token from localStorage
  
    if (!authToken) {
      return Promise.reject("Authentication token not found in localStorage");
    }
  
    // Define the URL for the DELETE request, including the task ID to delete
    const url = `http://192.168.40.176:8080/delete-task/${taskId}`;
  
    // Define the headers for the request, including the authentication token
    const headers = {
      'Authorization': authToken,
    };
  
    // Use the fetch API to make the DELETE request
    return fetch(url, {
      method: 'DELETE',
      headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  
 
  

  