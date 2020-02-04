# IncidentMap
HOW IT WORKS:
This app uses the Google Maps and Darksky API to map incidents supplied by a JSON file.

HOW TO INSTALL:
1) Clone this Repository's Master Branch.

2) Navigate to the directory's src/data/api_keys/index.js file and replace the 'YOUR KEY GOES HERE' string with you API key 
specific to the respective API (I can supply a key if you do not have one).

3) Navigate to the directory's public/data/Incidents.json file and replace it with a file containing test incident data 
(this file MUST named Incidents.json, and must reside in the public/data directory.

4) In the cloned branch's directory, run an "npm install" to install all of the dependencies.

5) In the cloned branch's directory, run an "npm start" to start the webpack dev-server. This will open the app in your default 
browser.

FUTURE IMPROVEMENT/BEST PRACTICES:
1) Data validation of incident.json file (this would include validation of whether the file is a valid JSON file). This would 
also most likely include a JSON parsing mechinism.

2) ERROR redirect. This app should redirect the user to a page to indicates whether an error has occured.

3) Filepicker for Incident.json file. This would allow the user to select the Indicent.json file to be mapped (this could also 
potentially be feed from an different system).

4) API/Application authenication. The use of the APIs (Google Maps and Darksky) are free until data usage exceeds a specific limit.
Authentication would help prevent a run on usage.

5) Server side rendering/caching. The application makes calls directly from the browser to external services, this can be taxing 
if there is a lot of requests.

DEV TIME INVESTED:
~ 5.5 hours. I required some time to investigate available APIs (but quickly made a decision). I also had some of the boiler plate 
React code prewritten (which saved me some time); and, I had previously written a mobile app that use the Google API, so I was 
fimiliar with how it functioned.
