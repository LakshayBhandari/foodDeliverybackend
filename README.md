# Food Delivery Backend API

This project is the backend for a Food Delivery application. It manages organizations, items, and pricing configurations specific to delivery zones. The API supports operations to create and manage data related to these entities and calculate prices based on various parameters.

## Features

- **Organizations Management**: Create and manage organizations.
- **Items Management**: Add new items specifying whether they are perishable or non-perishable.
- **Pricing Management**: Define and manage pricing strategies based on organization, item, and delivery zone.
- **Price Calculation**: Calculate the total delivery price based on the item type, organization, and delivery distance.

## Technologies

- **Node.js**: The runtime environment for running the JavaScript server.
- **Express.js**: The web application framework used for building web and API applications.
- **Prisma**: An ORM (Object Relational Mapping) tool used to interact with the database.
- **Swagger**: Used for API documentation and testing.
- **PostgreSQL**: The database used to store all data related to organizations, items, and pricing.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/food-delivery-backend.git
   cd food-delivery-backend

   ```

2. **Install dependencies:**

   ```bash
   Install dependencies:

   ```

3. **Set up the database:**
   Make sure PostgreSQL is installed and running.
   Create a database named food_delivery.

4. **Run database migrations (if any):**

   ```bash
   npx prisma migrate dev

   ```

5. **Start the server:**

   ```bash
   npm start

   ```

6. **Usage**
   Access the API through the base URL http://localhost:3000. The API routes include:

   - **POST /organizations** - Create a new organization.
   - **POST /items** - Add a new item.
   - **POST /pricing** - Create a new pricing record.
   - **POST /pricing/calculate-price** - Calculate the price for delivery based on specified parameters.