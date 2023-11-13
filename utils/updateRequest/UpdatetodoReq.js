export async function updateTask(taskId, content,title,date,authToken) {

    const url = `http://192.168.40.176:8080/update-task/${taskId}`;
    // Create an object with the request data, including the method and body (content to update).
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken, // You can adjust the content type if needed.
      },
      body: JSON.stringify({ content,title,date }), // Convert the content to JSON format.
    };
  
    // Use the fetch API to make the POST request and handle it with promises.
    return fetch(url, request)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the server responds with JSON data.
      })
      .then(data => {
        // Handle the response data here, if needed.
        return data; // You can return the data to the caller if desired.
      })
      .catch(error => {
        // Handle any errors that occurred during the request.
        console.error('Error updating task:', error);
        throw error; // Rethrow the error to propagate it to the caller.
      });
  }
  

  