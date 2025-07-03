import { eq } from 'drizzle-orm'
import { events, eventTeachers, teachers } from '~/server/database/schema'
import { useDrizzle } from '~/server/utils/drizzle'

export default defineEventHandler(async (e) => {
  try {
    const { id } = getQuery(e)
    const db = useDrizzle()

    // 获取事件信息
    const [event] = await db.select().from(events).where(eq(events.id, Number(id)))

    // 获取关联的老师信息
    const eventTeachersList = await db.select({
      id: teachers.id,
      name: teachers.name,
      description: teachers.description,
      address: teachers.address,
      avatar: teachers.avatar,
      joinedAt: teachers.joinedAt,
    }).from(eventTeachers).leftJoin(teachers, eq(eventTeachers.teacherId, teachers.id)).where(eq(eventTeachers.eventId, Number(id)))

    return {
      event,
      teachers: eventTeachersList,
    }
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: String(error),
    })
  }
})
