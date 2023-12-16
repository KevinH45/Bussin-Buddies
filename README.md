
# Bussin' Buddies

An AI-powered social networking app for creating friends through restaurant meetups.

## API Reference

#### Create a user

```http
  POST /create-user
```
| Parameter  | Type      | Description                             |
|------------|-----------|-----------------------------------------|
| `bio`      | `string`  | **Required**. User's short biography.   |
| `age`      | `int`     | **Required**. User's age.                |
| `location` | `geo coord`| **Required**. Geographical coordinates representing the user's location.|
| `email`    | `string`  | **Required**. User's email address.      |
| `username` | `string`  | **Required**. User's chosen username.    |
| `password` | `string`  | **Required**. User's chosen password.    |


#### Login

```http
  POST /login
  ```
  | Parameter  | Type      | Description                             |
|------------|-----------|-----------------------------------------|
| `username` | `string`  | **Required**. User's username.           |
| `password` | `string`  | **Required**. User's password.           |

#### Login

```http
  POST /refresh
  ```
  | Parameter  | Type      | Description                             |
|------------|-----------|-----------------------------------------|
| `jwt_refresh` | `string`  | **Required**. Refresh token|

#### Logout

```http
  GET /api/refresh
  ```
  | Parameter  | Type      | Description                             |
|------------|-----------|-----------------------------------------|
| `jwt_access_token` | `string`  | **Required**. Refresh token|

#### Get listings

```http
  GET /listings
  ```
| Parameter               | Type      | Description                                      |
|-------------------------|-----------|--------------------------------------------------|
| `jwt_access_token`      | `string`  | **Required**. JSON Web Token for user validation.|
| `location_filter_on`    | `boolean` | Enable/disable location-based filtering.         |
| `cuisine_filter_on`     | `boolean` | Enable/disable cuisine-based filtering.          |

#### Create a new listing

```http
  POST /listings
  ```
| Parameter          | Type      | Description                                  |
|--------------------|-----------|----------------------------------------------|
| `jwt_access_token` | `string`  | **Required**. JSON Web Token for user validation.|
| `rest_link`        | `string`  | **Required**. Link to the restaurant's website.|
| `time`             | `datetime`| **Required**. Date and time of the listing.   |
| `image_link`       | `string`  | Link to an image associated with the listing. |

#### Join a meetup listing
```http
  POST /listings/{list-id}
  ```
| Parameter          | Type      | Description                                  |
|--------------------|-----------|----------------------------------------------|
| `jwt_access_token` | `string`  | **Required**. JSON Web Token for user validation.|

#### Retrieve user info

```http
  GET /user/{user-id}
```
| Parameter  | Type      | Description                             |
|------------|-----------|-----------------------------------------|
| `bio`      | `string`  | **Required**. User's short biography.   |
| `age`      | `int`     | **Required**. User's age.                |
| `location` | `geo coord`| **Required**. Geographical coordinates representing the user's location.|
| `username` | `string`  | **Required**. User's chosen username.    |

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/KevinH45/QuHacks.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
  pip install -r api/requirements.txt
```

Start the server

```bash
  yarn run start
```