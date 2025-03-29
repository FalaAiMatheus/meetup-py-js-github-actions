import { decimal, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { ticketTable } from './ticket';

export const paymentTable = pgTable('payment', {
  id: uuid('id').primaryKey().defaultRandom(),
  ticketId: uuid('ticket_id').references(() => ticketTable.id),
  totalValue: decimal('total_value').notNull().default('0.00'),
  createdAt: timestamp('created_at', {
    mode: 'date',
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', {
    mode: 'date',
    withTimezone: true,
  })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
