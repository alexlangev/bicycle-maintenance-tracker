- 1
  Get Authenticated Athlete (getLoggedInAthlete)
  $ http GET "https://www.strava.com/api/v3/athlete" "Authorization: Bearer [[token]]"

The response looks like this: 
{
  "id": 70744880,
  "username": "alex_langevin",
  "resource_state": 2,
  "firstname": "Alex",
  "lastname": "Langevin",
  "city": null,
  "state": null,
  "country": null,
  "sex": "M",
  "premium": false,
  "summit": false,
  "created_at": "2020-10-22T03:31:37Z",
  "updated_at": "2020-10-23T01:36:29Z",
  "badge_type_id": 0,
  "profile_medium": "https://lh6.googleusercontent.com/-b5ms-9vdWdc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckdPRsi5gOhdowWNZwZ8t3EoIj4XQ/s96-c/photo.jpg",
  "profile": "https://lh6.googleusercontent.com/-b5ms-9vdWdc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckdPRsi5gOhdowWNZwZ8t3EoIj4XQ/s96-c/photo.jpg",
  "friend": null,
  "follower": null
}

-----------------------------------

- 2
  http://www.strava.com/oauth/authorize?client_id=[REPLACE_WITH_YOUR_CLIENT_ID]&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read


  little dance and shit:....

  response is:

  {
  "token_type": "Bearer",
  "expires_at": 1604193543,
  "expires_in": 16320,
  "refresh_token": "4c9fef2b753935fad7f87c36b6ae12409e01550d",
  "access_token": "ee4674753cd2bf89261570ff374dbcf4083e23dc",
  "athlete": {
    "id": 70744880,
    "username": "alex_langevin",
    "resource_state": 2,
    "firstname": "Alex",
    "lastname": "Langevin",
    "city": null,
    "state": null,
    "country": null,
    "sex": "M",
    "premium": false,
    "summit": false,
    "created_at": "2020-10-22T03:31:37Z",
    "updated_at": "2020-10-23T01:36:29Z",
    "badge_type_id": 0,
    "profile_medium": "https://lh6.googleusercontent.com/-b5ms-9vdWdc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckdPRsi5gOhdowWNZwZ8t3EoIj4XQ/s96-c/photo.jpg",
    "profile": "https://lh6.googleusercontent.com/-b5ms-9vdWdc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckdPRsi5gOhdowWNZwZ8t3EoIj4XQ/s96-c/photo.jpg",
    "friend": null,
    "follower": null
  }
}

-----------------------------------------------
- 3
  