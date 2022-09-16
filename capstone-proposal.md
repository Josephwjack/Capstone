 **Name of Student:** Joseph Jack

**Name of Project:** Halfways/ Halfway There / Midpoint meetup ? Not 100% set on which one.

**Project's Purpose or Goal: (What will it do for users?)** This application will take two inputs, an address for themselves and a friends address and find the halfway distance between them to meetup. It will then show a list of meetup spots near those coordinates.

**List the absolute minimum features the project requires to meet this purpose or goal:** 
- Users will be directed to a sign in/ sign up page after splash page.
- Users will input two locations and click search.
- Application displays halfway point between two users. (Google Maps API does not have this functionality so i'll have to add the latitudes of each and divide by 2. After that add longitudes of each location and divide by 2. With those new coordinates ill then make a call to the Google Maps API.)
- Users can then see a list of cafes, restaurants etc. nearby.
- Site is hosted on firebase

**What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.** 
- This will be a React based application. I plan on using Firebase for authorization and authentication. 
- Chakra UI or Material UI along with styled components for styling. 
- This application will use a google maps API (Geocoding). Beyond that I'm sure there will be more libraries used I'll come back and edit this. 

**If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.**
- I would like users to have the option to search by realtime location without entering an address. 
- I'd like users to be able to filter their results by bar/restaurant/cafe/park/farmers market.
- Have UI be responsive and tailored for use on desktops, tablets and phones.

**What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?**

- Geolocation API needed for realtime location tracking. Not sure if I can run both APIs simultaneously.
- I think the filtering will use the Google API aswell.

**Is there anything else you'd like your instructor to know?**

- I'm excited to build out this application. I haven't spent a lot of time on UI or making a project as polished as I'd have liked just with time restraints and the amount of smaller projects. A little nervous but I know this project will be a huge learning step for me to problem solve and figure out how to make all of this work.