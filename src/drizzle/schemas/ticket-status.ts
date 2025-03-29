import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const ticketStatusTable = pgTable('ticket_status', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({
    length: 255,
  }).notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
  })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  updatedAt: timestamp('updated_at', {
    withTimezone: true,
  })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
