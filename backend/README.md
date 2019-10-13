# Notes

## Prisma

__Prisma__ is a Data Access Layer (DAL)

- This allows for a [__clean and layered architecture__](https://www.prisma.io/docs/understand-prisma/prisma-introduction-what-why-how-j9ff/#clean-and-layered-architecture)

> "It ensures the application server can talk to your database(s) in a secure and performant way."

__How does Prisma fit into your stack?__

> "Prisma is a standalone infrastructure component that sits on top of your database. You're then using a Prisma client (which is available in various languages) in your application server to connect to Prisma.

> This enables you to talk to your database(s) through a simple and modern API ensuring highly performant and secure database access."

### Resources

- Prisma Tutorial: [A Guide to Common Resolver Patterns](https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-implementing-relations-with-prisma-client)

- [How to GraphQL](https://www.howtographql.com/)


### [Prisma Basics: Datamodel, Prisma Client & Server](https://www.prisma.io/docs/understand-prisma/prisma-basics-datamodel-client-and-server-fgz4/)

#### datamodel

- For each model defined in the datamodel, CRUD Prisma client operations are automatically generated.

> "When the datamodel is written manually from scratch, the datamodel is also used to perform database migrations (this only applies for new databases without existing data). The model definitions of the datamodel not only determine the API operations of the Prisma client, but are also mapped to the database (meaning they're used to perform database migrations in a declarative way)."

- What does a database migration mean in the context of a "new database without existing data"?

#### Prisma Client

- These are the CRUD operations generated via the datamodel.

- The client communicates with the core Prisma offering, which is the Prisma server.

> "The Prisma client is an auto-generated library that replaces a traditional ORM in your API server. It connects to a Prisma server, which sits on top your database."

> "The Prisma client is available in various programming languages and provides type-safe database access. In contrast to traditional ORMs, it provides a seamless API to work with relational data, JOINs and transactions."

#### Prisma Server

> "The Prisma server is a standalone infrastructure component that is connected to [sits on top] your database:"

> "The main responsibility of the Prisma server is to translate requests made by the Prisma client into actual database queries."

- The Wes Bos course starts with the free, hosted demo server in Prisma Cloud. By using `prisma init`, a database is created and a Prisma server configured to work with it.

- If you had an existing database, you'd need to configure your Prisma server to work with it.

- In the end of the Bos course, we deploy the Prisma server to Heroku or Now, but to start Prisma manages the hosting of the Prisma server on Prisma Cloud.
