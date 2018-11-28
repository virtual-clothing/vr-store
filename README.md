# VShoppify
This is an e-commerce static web application that supported by Web/VR features. All the user actions are performed via REST API at the client side using Axios.

## Features
1. Render clothes by Men/Women/Kids
    * images can show the back side when user hover over them
    * add favorite items into the favorite list
2. Sort clothes by types
    * All items
    * Shirt
    * Hoodies & Jackets
    * Pants 
    * Shorts
    * SwimWear
    * Shoes
    * Bags
3. User is able to create an account and login to it. Username and password authentication is done through Auth0
4. Filter clothes 
    * Size
    * Color
5. Fitting room /Virtual Reality/
    * Drag items
    * Add item to the cart
    * Port to other VR pages
6. Cart
    * Add items
    * Drop items
    * Remove items
    * Show the detail price
      * Subtotal
      * Tax
      * Total
7. Give reviews to the items
8. Virtual assistant
    * Contact by email
    * Chatbot /IBM Watson/
      * Identify user intent
      * Respond intelligently to the user using entities
      * Tell jokes
      * Tell greetings
9. Payment /Stripe/
# Screenshot/GIF
## Woman clothing page
![screen shot 2018-11-28 at 12 27 21 am](https://user-images.githubusercontent.com/24214152/49138592-71a50a80-f2a4-11e8-8b4d-338e2dfce833.png)

# Security
  1. Access to API is protected by several middleware layer that if the client should be made access to recource
  2. Each input by the user protected from common security vulnerabilities
# API list
  1. `GET /logout`
  2. `GET /callback`
  3. `GET /api/userinfo`
  4. `GET /cart`
  5. `DELETE /cart/:id`
  6. `PUT /addcart`
  7. `PUT /remcart`
  8. `GET /api/all`
  9. `GET /favorites`
  10. `POST /favorites`
  11. `DELETE /favorite/:id`
  12. `GET /checkauth`
  13. `PUT /updateaccount`
  14. `GET /getItemById`
  15. `GET /itemReviews`
  16. `POST /submitreviews`
  17. `POST /cart`
  18. `DELETE /remallcart`
  19. `POST /api/payment``
# Set UP
To set up the development environment, you need the following steps
  1. Download npm and node.js
  2. Downlaod and install postgresSQL
# Running the App
  1. Run `npm install`
  2. Run `nodemon start`
  3. Open `localhost:3000` on your browser
