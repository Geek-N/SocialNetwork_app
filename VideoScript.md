🎥 Social Media API Walkthrough Video Script (Silent Theatre Style)

## Intro

[Screen: Blank desktop or terminal]
Text overlay: “Social Media API — Backend RESTful API Walkthrough”
Text overlay fades out after 3 seconds

## Step 1: Open Project in VS Code

Action: Open VS Code
Action: Open folder social-media-api
Text overlay: “Opening project folder in VS Code”

## Step 2: Review Project Structure
Action: Expand folders: /config, /models, /routes/api
Scroll through main files: server.js, connection.js, User.js, Thought.js, route files
Text overlay: “Project structure overview”

## Step 3: Open Terminal, Install Dependencies
Action: Open integrated terminal in VS Code
Show npm install command typed and run (optional if fresh setup)
Text overlay: “Install dependencies with ‘npm install’”

## Step 4: Start Server
Action: Run npm start or node server.js
Show terminal logs indicating MongoDB connection success and server running on port 3001
Text overlay: “Starting Express server on http://localhost:3001”

## Step 5: Open Insomnia
Action: Launch Insomnia REST client
Text overlay: “Launching Insomnia for API testing”

## Step 6: Create New Workspace / Environment
Action: Create new workspace named “Social Media API”
Optionally create environment variables for BASE_URL = http://localhost:3001/api
Text overlay: “Creating new workspace & environment variables”

## Step 7: Test GET all Users
Action: Create new GET request
URL: http://localhost:3001/api/users
Hit “Send”
Show response (likely Alice and Sarah from seed or prior tests)
Text overlay: “GET all users — returns existing users”


## Step 8: Create a New User — Captain Blackbeard 
Action: Create new POST request

URL: http://localhost:3001/api/users

Set body to JSON (application/json) with:

{
  "username": "captainblackbeard",
  "email": "blackbeard@sevenseas.com"
}

Hit “Send”

Show successful response with new user data

Text overlay: “POST new user: Captain Blackbeard”

## Step 9: Verify New User Created 
Action: Repeat GET /api/users
Show new user appears in list
Text overlay: “New user Captain Blackbeard added”

## Step 10: Create a Thought from Captain Blackbeard
Action: New POST request to /api/thoughts
Body JSON:

{
  "thoughtText": "Yarr! Shiver me timbers!",
  "username": "captainblackbeard",
  "userId": "REPLACE_WITH_BLACKBEARD_ID"
}

[Instruction: Before sending, highlight you must replace "REPLACE_WITH_BLACKBEARD_ID" with the actual MongoDB ObjectId from user creation response.]

Hit “Send”
Show successful thought creation response
Text overlay: “POST new thought by Captain Blackbeard”

## Step 11: View All Thoughts
Action: GET /api/thoughts
Show list including Blackbeard’s new thoughs
Text overlay: “GET all thoughts with reactions”

## Step 12: Add Reaction to Captain Blackbeard’s Thought
Action: POST /api/thoughts/:thoughtId/reactions
Use the thoughtId from previous step
Body JSON:

{
  "reactionBody": "Arr! That be a fine thought!",
  "username": "alice"
}

Hit “Send”

Show updated thought with reaction

Text overlay: “POST reaction by Alice to Blackbeard’s thought”

## Step 13: Delete Reaction

Action: DELETE /api/thoughts/:thoughtId/reactions/:reactionId
Use correct thoughtId and reactionId from previous step
Hit “Send”
Show reaction removed in response
Text overlay: “DELETE reaction from thought”

## Step 14: Add Friend — Captain Blackbeard adds Sarah
Action: POST /api/users/:captainBlackbeardId/friends/:sarahId
Hit “Send”
Show updated Captain Blackbeard user document with friend in friend list
Text overlay: “POST add friend: Sarah added to Blackbeard’s friends”

## Step 15: Remove Friend 
Action: DELETE /api/users/:captainBlackbeardId/friends/:sarahId
Hit “Send”
Show updated user with friend removed
Text overlay: “DELETE friend: Sarah removed from Blackbeard’s friends”

## Step 16: Update User Email
Action: PUT /api/users/:captainBlackbeardId
Body JSON:

{
  "email": "blackbeard@pirateship.com"
}

Hit “Send”
Show updated email in response
Text overlay: “PUT update Blackbeard’s email”

## Step 17: Delete User

Action: DELETE /api/users/:captainBlackbeardId
Hit “Send”
Show response confirming deletion
Text overlay: “DELETE Captain Blackbeard and cascade delete his thoughts”

## Outro
Text overlay: “Thank you for watching! RESTful API walkthrough complete.”
End

## Additional Notes for Video
Highlight whenever you copy and paste ObjectIDs from responses for subsequent requests.
Use zoom or highlight effects on the URL, request body, and responses when possible.
Keep terminal and Insomnia windows side-by-side or alternate clearly to show both server logs and API results.