# My API

Short description about my api!

# How to start using my API

Start using it for FREE!

## Live Link!
www.aws.my-api.com


# API Entities / Collections

 - Users
 - Profiles
 - Post
 - Comments
 - Likes

# Usage / Limits


# ROUTES

Path: /
Method: GET
Description: Root Route, returns welcome message!


## API Routes

### Users
Path: /api/users
Method: GET
Description: Returns all users

Path: /api/users
Method: POST
Body: {email: String, password: String}
Description: Creates a new User

### Profiles
Path: /api/profiles
Method: GET
Description: Returns all profiles

Path: /api/profiles/:id
Method: PUT
Body: {website: String, bio: String, location: String}
Description: Update a profile by the profile id.