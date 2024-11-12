import { pgTable, serial, text, varchar, jsonb } from 'drizzle-orm/pg-core';

export const questions = pgTable('questions', {
  id: serial('id').primaryKey(),        // Auto-increment primary key
  category: varchar('category', { length: 255 }).notNull(),  // Category of the question
  question: text('question').notNull(),  // The question text
  options: jsonb('options').notNull(),   // JSONB type to store the options array
  answer: varchar('answer', { length: 255 }).notNull()  // The correct answer
});


