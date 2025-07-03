import { teachers } from '~/server/database/schema'
import { useDrizzle } from '~/server/utils/drizzle'

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)
  const db = useDrizzle()
  const teacher = await db.query.teachers.findFirst({
    where: eq(teachers.id, Number(id)),
  })

  return teacher
})
