import type { InferSelectModel } from 'drizzle-orm'
import type { events, teachers } from '~/server/database/schema'

export type Event = InferSelectModel<typeof events>
export type Teacher = InferSelectModel<typeof teachers>

export interface EventWithTeacher extends Event {
  teachers: Teacher[]
}
