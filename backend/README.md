# Notes

## Prisma

__Prisma__ is a Data Access Layer (DAL)

- This allows for a __clean and layered architecture__

https://www.prisma.io/docs/understand-prisma/prisma-introduction-what-why-how-j9ff/#clean-and-layered-architecture

> "It ensures the application server can talk to your database(s) in a secure and performant way."

__How does Prisma fit into your stack?__
> "Prisma is a standalone infrastructure component that sits on top of your database. You're then using a Prisma client (which is available in various languages) in your application server to connect to Prisma.

> This enables you to talk to your database(s) through a simple and modern API ensuring highly performant and secure database access."

### [Prisma Basics: Datamodel, Prisma Client & Server](https://www.prisma.io/docs/understand-prisma/prisma-basics-datamodel-client-and-server-fgz4/)

#### datamodel

- For each model defined in the datamodel, CRUD Prisma client operations are automatically generated.

> "When the datamodel is written manually from scratch, the datamodel is also used to perform database migrations (this only applies for new databases without existing data). The model definitions of the datamodel not only determine the API operations of the Prisma client, but are also mapped to the database (meaning they're used to perform database migrations in a declarative way)."

- What does a database migration mean in the context of a "mew database without existing data"?
([
(https://www.prisma.io/docs/understand-prisma/prisma-basics-datamodel-client-and-server-fgz4/)
#### Resources

Prisma Tutorial: [A Guide to Common Resolver Patterns](https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-implementing-relations-with-prisma-client)
