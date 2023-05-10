# store-api

This is a Node.js backend project with two APIs to get product(s) data from a database. One API fetches a single product by id, and the other API fetches multiple products with options to filter, sort, limit fields, and paginate.

## Getting Started

### Prerequisites

- Node.js 
- MongoDB 

### Installation

1. Clone the repository:

`git clone https://github.com/shanmukhipriya99/store-api.git`


2. Install the dependencies:

`npm i`


3. Set up the environment variables:
- Create a `.env` file in the root directory
- Set the following variables:

     ```
     PORT=3000 # or any other port you want to use
     MONGODB_URI=<your_mongodb_uri>
     ```

### Usage

To start the server, run:

`npm start`


The server will start at `http://localhost:<PORT>`.

#### API Endpoints

- `GET /products/:id`: Fetches a single product by id
- `GET /products`: Fetches multiple products with options to filter, sort, limit fields, and paginate

##### Query Parameters

The `GET /products` endpoint accepts the following query parameters:

- Filter products based on key-value pairs. For example: `/products?company=ikea`
- `sort`: Sort products based on a field. For example: `/products?sort=-price` will sort products in descending order of price.
- `fields`: Select specific fields to return. For example: `/products?fields=name,price` will return only the name and price fields of the products.
- `page`: The page number to return. For example: `/products?page=2` will return the second page of products.
- `limit`: The number of products to return per page. For example: `/products?limit=10` will return 10 products per page.

## Built With

- Node.js
- Express
- MongoDB
- Mongoose



