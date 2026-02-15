import { integer, pgTable, text} from "drizzle-orm/pg-core";

export const notesTable = pgTable("notes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  content: text("content").notNull(),


});
