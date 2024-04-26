# ORM-E-Commerce-Backend
An application to aid in the managing of an Ecommerce business.

## Table of Contents
- [Description](#description)

- [User Story](#user-story)

- [Usage](#usage)

- [Features](#features)

- [Demonstration](#demonstration)

- [Credits](#credits)

- [Questions](#questions)


## Description 
This application is built using Express API to aid in the managing of an Ecommerce business. The business can update their products, categories and tags for products. This can also be easily used to update each of the products, categories and tags in the same way. Products, categories and tags can be created, updated and deleted. 


## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Usage
```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Features
- Routing through Express API to access each piece of the database.
- Database is seeded through models
- Models are used for easy creation of new products, categories and tags
- Database can be accessed to view, create or delete products, categories and tags

## Demonstration


https://github.com/ZeDevGit/ORM-E-Commerce-Backend/assets/42353819/70f4ec8a-21b9-4081-820a-cb5c9d92375e


## Credits
Edward Lawrence

## License
 ![Empty Badge](https://img.shields.io/badge/MIT-License-blue)

## Questions
 [ZeDevGit](https://github.com/ZeDevGit)
