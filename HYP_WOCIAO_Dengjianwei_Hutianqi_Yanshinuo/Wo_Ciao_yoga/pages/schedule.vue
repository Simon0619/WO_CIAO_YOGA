<script setup lang="ts">
const today = new Date()
const days = Array.from({ length: 8 }, (_, i) => {
  const date = new Date(today)
  date.setDate(today.getDate() + i - 2)

  return {
    label: i === 2 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' }),
    date: date.getDate(),
  }
})

const times = [
  '07:30',
  '09:00',
  '09:30',
  '10:15',
  '11:00',
  '11:15',
  '12:00',
  '12:15',
  '13:00',
  '13:15',
  '14:00',
  '14:15',
  '15:00',
  '15:15',
  '16:00',
  '16:15',
  '17:00',
  '17:15',

]

const schedule = [
  { day: 1, time: '07:30', title: 'Morning Flow', teacher: 'Annie W.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 1, time: '09:00', title: 'Power Yoga', teacher: 'Arven Xing.', duration: '75 min', location: 'Jing An Kerry Centre' },
  { day: 1, time: '11:15', title: 'Advanced Vinyasa', teacher: 'Alexander H.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 1, time: '13:15', title: 'Yin Yoga', teacher: 'Annie W.', duration: '90 min', location: 'Jing An Kerry Centre' },
  { day: 1, time: '15:15', title: 'Ashtanga', teacher: 'Allen Z.', duration: '90 min', location: 'Jing An Kerry Centre' },
  { day: 1, time: '17:15', title: 'Restorative', teacher: 'Aiyu Z.', duration: '60 min', location: 'Jing An Kerry Centre' },

  { day: 2, time: '07:30', title: 'Morning Flow', teacher: 'Annie W.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 2, time: '09:00', title: 'Power Yoga', teacher: 'Arven Xing', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 2, time: '11:00', title: 'Yin Yoga', teacher: 'Annie W.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 2, time: '11:15', title: 'Ashtanga', teacher: 'Allen Z', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 2, time: '14:15', title: 'Advanced Vinyasa', teacher: 'Alexander H.', duration: '75 min', location: 'Jing An Kerry Centre' },
  { day: 2, time: '16:15', title: 'Gentle Yoga', teacher: 'Amit Kumar.', duration: '60 min', location: 'Jing An Kerry Centre' },

  { day: 3, time: '09:30', title: 'Ashtanga', teacher: 'Amit Kumar.', duration: '75 min', location: 'Jing An Kerry Centre' },
  { day: 3, time: '11:15', title: 'Advanced Vinyasa', teacher: 'Alexander H.', duration: '90 min', location: 'Jing An Kerry Centre' },
  { day: 3, time: '13:15', title: 'Kundalini', teacher: 'Allen Z.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 3, time: '15:00', title: 'Restorative', teacher: 'Aiyu Z', duration: '75 min', location: 'Jing An Kerry Centre' },
  { day: 3, time: '17:00', title: 'Sunset Flow', teacher: 'Queenie Z.', duration: '60 min', location: 'Jing An Kerry Centre' },

  { day: 4, time: '07:30', title: 'Morning Flow', teacher: 'Annie W.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 4, time: '09:30', title: 'Hot Yoga', teacher: 'Annie Z.', duration: '90 min', location: 'Jing An Kerry Centre' },
  { day: 4, time: '12:15', title: 'Power Yoga', teacher: 'Arven Xing.', duration: '45 min', location: 'Jing An Kerry Centre' },
  { day: 4, time: '14:15', title: 'Gentle Yoga', teacher: 'Amit Kumar.', duration: '90 min', location: 'Jing An Kerry Centre' },
  { day: 4, time: '16:15', title: 'Restorative', teacher: 'Annie Z.', duration: '75 min', location: 'Jing An Kerry Centre' },

  { day: 5, time: '09:00', title: 'Morning Flow', teacher: 'Arven Xing.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 5, time: '11:15', title: 'Gentle Yoga', teacher: 'Amit Kumar.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 5, time: '13:00', title: 'Advanced Vinyasa', teacher: 'Aiyu Z.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 5, time: '15:15', title: 'Hot Yoga', teacher: 'Annie Z.', duration: '75 min', location: 'Jing An Kerry Centre' },
  { day: 5, time: '17:00', title: 'Sunset Flow', teacher: 'Arven Xing.', duration: '60 min', location: 'Jing An Kerry Centre' },

  { day: 6, time: '09:30', title: 'Kundalini', teacher: 'Allen Z.', duration: '75 min', location: 'Jing An Kerry Centre' },
  { day: 6, time: '11:15', title: 'Power Yoga', teacher: 'Arven Xing.', duration: '90 min', location: 'Jing An Kerry Centre' },
  { day: 6, time: '14:00', title: 'Hot Yoga', teacher: 'David Y.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 6, time: '16:00', title: 'Ashtanga', teacher: 'Amit Kumar.', duration: '45 min', location: 'Jing An Kerry Centre' },

  { day: 7, time: '10:15', title: 'Hot Yoga', teacher: 'David Y.', duration: '75 min', location: 'Jing An Kerry Centre' },
  { day: 7, time: '12:15', title: 'Gentle Yoga', teacher: 'Amit Kumar.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 7, time: '14:15', title: 'Kundalini', teacher: 'Allen Z.', duration: '60 min', location: 'Jing An Kerry Centre' },
  { day: 7, time: '16:15', title: 'Sunset Flow', teacher: 'Arven Xing.', duration: '60 min', location: 'Jing An Kerry Centre' },
]
</script>

<template>
  <div class="container mx-auto mt-4">
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th class="border border-gray-200 p-2" />
          <th v-for="(day, idx) in days" :key="idx" class="border border-gray-200 p-2 text-center font-bold" :class="day.label === 'Today' ? 'text-black' : 'text-gray-400'">
            <div>{{ day.label }}</div>
            <div>{{ day.date }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(time, tIdx) in times" :key="tIdx">
          <td class="border border-gray-200 p-2 text-right text-gray-600 font-mono w-16">
            {{ time }}
          </td>
          <td v-for="d in 8" :key="d" class="border border-gray-200 p-2 min-h-[60px]">
            <template v-for="item in schedule.filter(s => s.day === d && s.time === time)" :key="item.id">
              <div class="bg-gray-100 border rounded p-2 text-xs shadow mb-1">
                <div class="font-bold">
                  {{ item.title }}
                </div>
                <div>{{ item.teacher }}</div>
                <div>{{ item.duration }}</div>
                <div class="text-gray-500">
                  {{ item.location }}
                </div>
              </div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
