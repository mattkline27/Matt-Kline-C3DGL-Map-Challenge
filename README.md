
### Summary
Welcome C3D devs! I hope your experience with my submission is enjoyable and bug free. The app is hosted at https://mk-c3d-map-challenge-2e4b5d356787.herokuapp.com/. Hosting changes can be found on deployment-and-final-changes. To run this branch, just add API_PORT=3001 to your .env file.

If you have any issues or questions before the code review please reach out at matthewwkline@gmail.com. I look forward to speaking with you soon!

### Usage
The app runs with the default scripts: ```node server.js``` in the ```/server``` directory and ```npm start``` in the project root. The app will run on port 3000.

I emailed Josh a copy of the .env file for the project. Place it in the root directory to run the app locally. I've also emailed a credentials to access the AWS console. There you can view the ```locations``` DynamoDB table. Feel free to add, edit, or delete locations, just don't delete the table itself :).

### Behavior
The app loads saved locations to the map on page load. To add a location, click the floating button with the + below the top left menu. This will open the form to add a new location. When a location is successfully added it will drop a marker on the map and fly to the marker. If an invalid location is entered, it will display an alert explaining why.

### Structure
For both the server and client, I decided to group files by feature. I've found it a good way to organize code in past projects. In this case, I only had time to add one feature (locations), but I would've included a separate folder for polylines and other features if I had more time. 

The client has a features directory containing a ```components``` directory as well as ```actions```, ```actionTypes```, ```api```, ```reducer```, and ```thunks``` files to represent Redux flow. This is meant to mirror the root directory.

The server has a directory for the locations feature which contains a ```controller```, ```service```, and ```validator file```.

### Notes
The biggest thing I would've like to add if I had time was better error handling. It currently sends an alert to user if an invalid location is entered. But ideally I would have made separate actions for requests and failures, structured state in a way to reflect those events, and displayed a UI for fetch and post errors. When it came time to work on error handling I realized I would've had to write messy code or restructure how location state was stored, which risked breaking the project.

Other features I would've added include:

- Loading indicators
- A development database
- Polylines
- The ability to edit and delete markers
- Animations
- UI flair
- Dark mode
- Tests
- Accessibility features




