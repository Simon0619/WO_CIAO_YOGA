import { teachers } from '~/server/database/schema'
import { useDrizzle } from '~/server/utils/drizzle'

export default defineEventHandler(async () => {
  try {
    const db = useDrizzle()
    const results = await db.select().from(teachers)
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
