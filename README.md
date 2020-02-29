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

### GET to view a list of existing users
`/api/users`

Requires a valid token.

Returns a list of all existing users in the database.

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

## GET / Retrieve Actions

### GET a list of existing recipes
`/api/recipes`

Requires a valid token.

Returns list of all existing recipes in the database.

### GET a recipe by recipe id
`/api/recipes/:id`

Requires a valid token.

Returns an recipe based on the **_id_** parameter.

### GET a list of existing ingredients
`/api/ingredients`

Requires a valid token.

Returns list of all existing ingredients in the database.

### GET an ingredient by ingredient id
`/api/ingredients/:id`

Requires a valid token.

Returns an ingredient based on the **_id_** parameter.

### GET a list of existing categories
`/api/recipes/categories`

Requires a valid token.

Returns a list of all existing recipe categories in the database.

### GET a list of instructions for a particular recipe by recipe id
`/api/recipes/:id/instructions`

Requires a valid token.

Returns a list of all instructions / steps for a specific recipe based on the recipe's **_id_**.

## POST / Creation Actions

### POST to create a new recipe
`/api/recipes`

Requires a valid token.

Required fields for creating a recipe:
- title
- source
- category_id
- user_id

data schema:
```json
{
    "id": 1,
    "title": "cheeseburgers",
    "source": "aunt joy",
    "category_id": 1,
    "user_id": 1
}
```

Returns the created recipe.

### POST to create a new recipe category
`/api/recipes/categories`

Requires a valid token.

Required fields for creating a recipe category:
- title

data schema:
```json
{
    "title": "breakfast"
}
```

Returns the created recipe category.

### POST to add a new ingredient to the database
`/api/ingredients`

Requires a valid token.

Required fields for adding a new ingredient to the database:
- name
- description

data schema:
```json
{
    "name": "cheese",
    "description": "pepperjack"
}
```

Returns the created ingredient.

### POST to create a new instruction / step for recipes
`/api/recipes/instructions`

Requires a valid token.

Required fields for adding a new recipe instruction / step:
- recipe_id
- step #
- description

```json
{
    "step": 2,
    "description": "Preheat the oven",
    "recipe_id": 1
}
```

Returns the created instruction / step.

## Edit / Modify / PUT Actions

### PUT to modify a recipe by recipe id
`/api/recipes/:id`

Requires a valid token.

Required fields for modifying / updating a recipe:
- title
- source
- category_id

data schema:
```json
{
    "title": "chili",
    "source": "grandpa",
    "category_id": 2
}
```

Returns the updated recipe.

### PUT to modify a recipe category by category id
`/api/recipes/categories/:id`

Requires a valid token.

Required fields for modifying / updating a recipe category:
- title

```json
{
    "title": "appetizers"
}
```

Returns the updated recipe category.

### PUT to modify an ingredient by ingredient id
`/api/ingredients/:id`

Requires a valid token.

Required fields for modifying / updating an ingredient:
- name
- description

```json
{
    "name": "beef",
    "description": "cubed"
}
```

## DELETE Actions

### DELETE to delete a recipe by recipe id
`/api/recipes/:id`

Requires a valid token.

There are no require fields for deleting a recipe.

Returns deleted recipe's **_id_**.

### DELETE to delete a recipe category by category id
`/api/recipes/categories/:id`

Requires a valid token.

There are no required fields for deleting a recipe category.

Returns deleted recipe category's **_id_**.

### DELETE to delete an ingredient by ingredient id
`/api/ingredients/:id`

Requires a valid token.

There are no required fields for deleting an ingredient.

Returns deleted ingredient's **_id_**.