// PURPLE
const purple = {
  backgroundColor: 'rgba(151, 0, 109, 0.2)',
  borderColor: 'rgba(151, 0, 109, 1)',
}
// GREEN
const green = {
  backgroundColor: 'rgba(0, 151, 42, 0.2)',
  borderColor: 'rgba(0, 151, 42, 1)',
}

// YELLOW
const yellow = {
  backgroundColor: 'rgba(255, 215, 45, 0.2)',
  borderColor: 'rgba(255, 215, 45, 1)',
}
//BLUE
const blue = {
  backgroundColor: 'rgba(45, 85, 255, 0.2)',
  borderColor: 'rgba(45, 85, 255, 1)',
}

// RED
const red = {
  backgroundColor: 'rgba(255, 0, 0, 0.2)',
  borderColor: 'rgba(255, 0, 0, 1)',
}

export const programmingData: any = {
  labels: ['Javascript', 'Typescript', 'Python', 'React (hooks based)', 'Git'],
  datasets: [
    {
      label: 'Experience (Years)',
      data: [4.5, 1.5, 1.5, 5, 4.5],
      scale: [0, 10],
      ...blue,
      borderWidth: 1,
    },
    {
      label: 'Proficiency',
      data: [4, 3, 3, 4, 4],
      scale: [0, 10],
      ...red,
      borderWidth: 1,
    },
  ],
};


export const otherSkillsData: any = {
  labels: ['Management', 'Training', 'Mentoring', 'Consulting', 'Teamwork'],
  datasets: [
    {
      label: 'Experience (Years)',
      data: [2, 1.5, 2, 3, 4.5],
      scale: [0, 10],
      ...green,
      borderWidth: 1,
    },
    {
      label: 'Proficiency',
      data: [3, 3.5, 3.5, 3, 4.5],
      scale: [0, 10],
      ...yellow,
      borderWidth: 1,
    },
  ],
};

export const chartOptions = {
  scale: {
    min: 0,
    max: 5,
  }
};