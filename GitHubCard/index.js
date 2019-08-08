/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/karenjli')
// .then ((response) => {
//   console.log(response)
// })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function Card (user) {
  //card
  let userCard = document.createElement('div');
  userCard.classList.add('card');

  //img
  let userImg = document.createElement('img');
  userImg.src = user.avatar.url;

  //card-info
  let userInfo = document.createElement('div');
  userInfo.classList.add('card-info');

  //name
  let userName = document.createElement('h3');
  userName.classList.add('name');
  
  //username
  let userHandle = document.createElement('p');
  userHandle.classList.add('username');
  userHandle.textContent = user.login;

  //location
  let userLocation = document.createElement('p')
  userLocation.textContent = user.location;

  //Profile Link
  let userProfile = document.createElement('p')
  let profileLink = document.createElement('a');
  profileLink.textContent = user.html_url;

  //Followers
  let userFollowers = document.createElement('p')
  userFollowers.textContent = user.followers;

  //Following
  let userFollowing = document.createElement('p')
  userFollowing.textContent = user.following;

  //Bio
  let userBio = document.createElement('p');
  userBio.textContent = user.bio;

  //AppendChild
  userCard.appendChild ('userImg');
  userCard.appendChild('userInfo');
  userInfo.appendChild('userName');
  userInfo.appendChild('userHandle');
  userInfo.appendChild('userLocation');
  userInfo.appendChild('userProfile');
  userInfo.appendChild('userFollowers');
  userInfo.appendChild('userFollowing');
  userInfo.appendChild('userBio');
  userProfile.appendChild('profileLink');


}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
