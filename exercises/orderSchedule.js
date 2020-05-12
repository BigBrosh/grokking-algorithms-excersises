// greedy algorithm
const originalSchedule = {
  painting: {
    begin: '09:00',
    end: '10:00'
  },
  english: {
    begin: '09:30',
    end: '10:00'
  },
  math: {
    begin: '10:00',
    end: '11:00'
  },
  computerScience: {
    begin: '10:30',
    end: '11:00'
  },
  music: {
    begin: '11:00',
    end: '12:00'
  }
};

const getEarliestLesson = (schedule) => {
  let earliest = null;
  let earliestTime;

  Object.keys(schedule).forEach((lesson) => {
    const { begin } = schedule[lesson];

    if (earliest === null || begin < earliestTime) {
      earliest = lesson;
      earliestTime = begin;
    }
  });

  return earliest;
};

const findLessonByBeginTime = (schedule, beginTarget) => {
  if (beginTarget === undefined) {
    return getEarliestLesson(schedule);
  }

  const lessons = Object.keys(schedule);
  const lessonsLength = lessons.length;

  for (let i = 0; i < lessonsLength; i++) {
    if (schedule[lessons[i]].begin === beginTarget) {
      return lessons[i];
    }
  }

  return null;
};

const orderSchedule = (schedule) => {
  const getLesson = (end) => {
    const lessonName = findLessonByBeginTime(schedule, end);
    return { name: lessonName, ...schedule[lessonName], next: {} };
  };

  let orderedSchedule = getLesson(undefined);
  let current = orderedSchedule;

  while (current.name !== null) {
    current.next = getLesson(current.end);
    current = current.next;
  }

  return orderedSchedule;
};

console.log(orderSchedule(originalSchedule));
// -> linked list in short: painting, math, music
