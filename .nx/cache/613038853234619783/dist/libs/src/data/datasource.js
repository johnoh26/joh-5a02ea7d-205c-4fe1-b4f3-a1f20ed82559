// import { config } from 'dotenv';
// import { DataSource } from 'typeorm';
// config();  // load env variables if using dotenv
// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'postgres',
// //   type: 'postgres',
// //   host: process.env['DATABASE_HOST'],
// //   port: parseInt(process.env['DATABASE_PORT']!, 5432),
// //   username: process.env['DATABASE_USERNAME'],
// //   password: process.env['DATABASE_PASSWORD'],
// //   database: process.env['DATABASE_NAME'],
//   synchronize: true,  // disable sync for production, prefer migrations
//   logging: true,
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   migrations: [__dirname + '/migrations/*{.ts,.js}'],
//   subscribers: [],
// });
//# sourceMappingURL=datasource.js.map