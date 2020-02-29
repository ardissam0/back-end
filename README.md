# Secret Family Recipes Cookbook API

### Base URL: to be added after deployment to Heroku

## Data Schemas

user:
```json
{
    "id": 1,
    "username": "admin",
    "password": "password"
}
```

recipe category:
```json
{
    "id": 1,
    "title": "lunch"
}
```

recipes:
```json
{
    "id": 1,
    "title": "chicken noodle soup",
    "source": "grandma",
    "category_id": 1,
    "user_id": 1
}
```

__Note:__ category_id and user_id are foreign keys linking the recipes table to the users table and categories table within the database.

ingredients:
```json
{
    "id": 1,
    "name": "eggs",
    "description": "cage free"
}
```

**Bridge Table for recipe_ingredients**:
```json
{
    "recipe_id": 1,
    "ingredient_id": 1,
    "quantity": 5,
    "units": "teaspoons"
}
```

**Note:** recipe_id and ingredient_id are foreign keys linking the recipe_ingredients table to the recipes and ingredients table within the database.

instructions:
```json
{
   "id": 1,
   "step": "melt the butter",
   "recipe_id": 1 
}
```

**Note:** recipe_id is a foreign key linking the instructions table to the recipes table within the database.

# Endpoints

## Authentication

### POST to register a new user
`/api/auth/register`

Required data for registering a new user:
- Username (unique)
- Password (unique)


### POST to login with an existing account
`/api/auth/login`

Required data for logging in a user:
- Username
- Password

This will return an JWT Authorization token that will be used for private routing on the frontend.

## Recipe Management

### GET a list of existing recipes
`/api/recipes`

Requires a valid token.

Returns all list of existing recipes in the database.

### POST to create a new recipe
`/api/recipes`

Requires a valid token.

Required fields for creating a recipe:
- title
- source
- category_id
- user_id

data schema
```json
{
    "id": 1,
    "title": "cheeseburgers",
    "source": "aunt joy",
    "category_id": 1,
    "user_id": 1
}
```