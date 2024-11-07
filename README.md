# Pizzy

Pizzy is a small Vue app idea that I will use to learn [Vue](https://vuejs.org/)
and [TypeScript](https://www.typescriptlang.org/) when I have time to. Maybe you can learn it this way too !

The goal is to create a solution based on little information.

At first, I won’t use any DB logic/system but, I will use [Pinia](https://pinia.vuejs.org/). There are steps listed
later
which are the requirements of the app.
Once the app done, a [MongoDB](https://www.mongodb.com/) database will be implemented, so I can learn it
and [Mongoose](https://mongoosejs.com/) ODM too.

---

## Routes

The first step is to create the first routes :

- Orders (Home), to display the orders queue and to create a new order;
- Tables, to see which tables in the restaurants are used;
- Customers, to register a new customer and keeping his history;
- Transactions, to list all the transactions and keep history of basically everything;

---

## Pages content

### Orders

The orders page is a simple board to <b>track waiting orders, ongoing and finished ones.</b> Each entry of the board is
a small card, to display the pizza name and customer name.

A button needs to be displayed to be able to create a new order, with the kind of pizza and the customer (Either be able
to create the customer on the go or by selecting it in the registered customers list).

### Tables

The tables page contains a certain amount of rectangles, to mock the tables of the restaurant. A green table means it’s
free and a red one mean it’s occupied. The logic behind this is that when an order is created with the option "
Take-out" <b>unchecked</b>, it creates a count-down associated with the table. At the end of the timer, the table
becomes free.

### Customers

The customers page is simply a list of customers and a button to add one.

Bonus : add filters to the list.

### Transactions

The transactions page is a list of every transaction made with the transaction items and customer name and tables number
if relevant.

Bonus : add filters to the list.

---

## Pinia

Now, it’s time to add the Pinia store that will contain every kind of infos.

### Pizzas

- name
- ingredients <b>(names and quantities)</b>

### Orders

- Customer <b>(id)</b>
- ordered pizza(s)
- table number <b>(if relevant)</b>
- created at timestamp
- ended/delivered at timestamp

### Customers

- name
- history of transactions <b>(either in the customer object or another store like customer_history)</b>

### Tables

- id
- number (either use id as the number or use number if id is like an uuid)
- is occupied ? <b>(like is occupied until...)</b>

### Transactions

- id
- customer
- items <b>(pizzas)</b>
- table <b>(if relevant)</b>
- timestamps

## Functions

Once the store is done, the next step is to create evey functions needed to accomplish the app. Like, createPizza,
createOrder, markOrderAsComplete, ...

You got it, make the app alive ! Let’s not forget some validations :)

## MongoDB & Mongoose

And the icing on the cake, let’s use MongoDB and keep Pinia only as a history of what we did.

So the next step is to transform the entire Pinia store into a DB and make everything truly dynamic.

Bonus : Let's make a login/register form to create a restaurant and be able to have as many restaurants with their own
data.