export const code1 = {
  fileName: "Server Side",
  code: `

1. *Importing Required Modules*: 
    javascript
    const express = require('express');
    const multer = require('multer');
    const tf = require('@tensorflow/tfjs-node');
    const cors = require("cors")
    

   Here, the code imports necessary modules:
   - express: for creating the web server.
   - multer: for handling multipart/form-data, primarily used for uploading files.
   - @tensorflow/tfjs-node: TensorFlow.js for Node.js, allowing the usage of TensorFlow models in a Node.js environment.
   - cors: for enabling CORS (Cross-Origin Resource Sharing) middleware, which allows restricting resources on a web page to be requested from another domain outside the domain from which the first resource was served.

2. *Creating an Express App*:
    javascript
    const app = express();
    const port = 3000;
    

   This section creates an instance of the Express application and assigns it to the app variable. The port variable defines the port on which the server will listen.

3. *Loading Pre-Trained Model and Configuring Multer*:
    javascript
    (async () => {
      const modelPath = 'file:///Users/DELL/Desktop/Sem_BE-8th/Project_api/model/driverdistraction_tfjs/model.json';
      const model = await tf.loadLayersModel(modelPath);
      const storage = multer.memoryStorage();
      const upload = multer({ storage: storage });
      // ...
    })();
    

   This section loads a pre-trained model using TensorFlow.js's loadLayersModel function. It's wrapped inside an asynchronous function (async () => {}) to use await for loading the model asynchronously. The path to the model JSON file is specified in modelPath.

   Multer is configured to use in-memory storage (multer.memoryStorage()) for handling file uploads. upload is an instance of Multer middleware configured with the storage settings.

4. *Setting Up CORS Middleware*:
    javascript
    app.use(cors())
    

   CORS middleware is applied using app.use(cors()) to allow cross-origin requests from any domain.

5. *Handling POST Requests to '/classify' Endpoint*:
    javascript
    app.post('/classify', upload.single('image'), async (req, res) => {
      try {
        // Handling image upload
        // Pre-processing image
        // Making predictions using the loaded model
        // Sending response with predicted class
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    

   This section defines a route (/classify) to handle POST requests. The endpoint expects a single file upload named 'image'.

   Inside the request handler, it checks if a file was uploaded (if (!req.file)). If no file is uploaded, it returns a 400 status code with an error message.

   If a file is uploaded, it decodes the image from base64 and resizes it to the required dimensions. Then, it expands the dimensions to match the input shape required by the model. After preprocessing, it makes predictions using the loaded model and sends the predicted class in the response.

6. *Starting the Server*:
    javascript
    app.listen(port, () => {
    console.log(\`Server running on http://localhost:\${port}\`);   
    });

    Finally, the server is started by calling app.listen(port, callback) with the specified port and a callback function to log the server's address.

    `,
};
