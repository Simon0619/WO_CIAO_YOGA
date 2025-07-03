import type { EventWithTeacher } from '~/server/types/event'
import { eq, inArray } from 'drizzle-orm'
import { events, eventTeachers, teachers } from '~/server/database/schema'
import { useDrizzle } from '~/server/utils/drizzle'

export default defineEventHandler(async (event) => {
  try {
    const { isRecommended } = getQuery(event) as { isRecommended: string } || { isRecommended: '0' }
    const db = useDrizzle()

    // 首先获取所有符合条件的活动
    const eventResults = await db.select({
      id: events.id,
      name: events.name,
      description: events.description,
      cover: events.cover,
      cover2: events.cover2,
      startAt: events.startAt,
      endAt: events.endAt,
      isRecommended: events.isRecommended,
    }).from(events).where(eq(events.isRecommended, Number(isRecommended)))

    // 获取所有活动的老师信息
    const eventTeachersResults = await db.select({
      eventId: eventTeachers.eventId,
      teacher: {
        id: teachers.id,
        name: teachers.name,
        avatar: teachers.avatar,
        address: teachers.address,
      },
    }).from(eventTeachers).leftJoin(teachers, eq(eventTeachers.teacherId, teachers.id)).where(inArray(eventTeachers.eventId, eventResults.map(e => e.id)))

    // 将老师信息合并到对应的活动中
    const results = eventResults.map(event => ({
      ...event,
      teachers: eventTeachersResults
        .filter(et => et.eventId === event.id)
        .map(et => et.teacher),
    })) as EventWithTeacher[]

    return {
      results,
      status: 'success',
    }
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: String(error),
    })
  }
})
