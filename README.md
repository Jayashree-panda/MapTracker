## Problem Statement
The manager of an organization needs to continuously track the location of the Medical Representative(MR) through out the day. Design an app which:-

    1. Continuously track the user
    2. Send the location (lats and longs) to the server
    3. UI to view to the user the movement
    
## Approach
Socket io is used for the real time connection between the 2 clients. Within the client folder, there are 2 clients (one for the manager and another for the medical representative). The MR.html file within the client folder generates longs and lats at regular intervals which is being sent to the server. The Manager.html file within the client folder receives those longs and lats from the server and plots it on the map using Leaflet.js in real time.

## How to run the project
Navigate into server directory
Run npm install
Inside server directory, run nodemon index.js

Now first open MR.html, which produces different longs and lats at regular intervals.
And then open Manager.html in another tab. You can now see the tracking of MR by manager.
