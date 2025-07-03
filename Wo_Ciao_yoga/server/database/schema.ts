import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const teachers = sqliteTable('teachers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  address: text('address').notNull(),
  avatar: text('avatar').notNull(),
  joinedAt: integer('joined_at').notNull(),
})

export const events = sqliteTable('events', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  cover: text('cover').notNull(),
  cover2: text('cover2'),
  startAt: integer('start_at').notNull(),
  endAt: integer('end_at').notNull(),
  isRecommended: integer('is_recommended').default(0),
})

export const eventTeachers = sqliteTable('event_teachers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  eventId: integer('event_id').notNull().references(() => events.id),
  teacherId: integer('teacher_id').notNull().references(() => teachers.id),
})
