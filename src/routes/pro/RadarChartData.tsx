export const programmingData: any = {
  labels: ['Javascript', 'Typescript', 'Python', 'React (hooks based)', 'Micro Frontends', 'Git'],
  datasets: [
    {
      label: 'Experience (Years)',
      data: [4.5, 1.5, 1.5, 5, 1.5, 4.5],
      scale: [0, 10],
      backgroundColor: 'rgba(45, 85, 255, 0.2)',
      borderColor: 'rgba(15, 10, 222, 1)',
      borderWidth: 1,
    },
    {
      label: 'Proficiency',
      data: [4, 3, 3, 4, 3, 4],
      scale: [0, 10],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const otherSkillsData: any = {
  labels: ['Management', 'Training/Mentoring', 'Consulting'],
  datasets: [
    {
      label: 'Experience (Years)',
      data: [2, 1.5, 3],
      scale: [0, 10],
      backgroundColor: 'rgba(45, 85, 255, 0.2)',
      borderColor: 'rgba(15, 10, 222, 1)',
      borderWidth: 1,
    },
    {
      label: 'Proficiency',
      data: [3, 3.5, 3],
      scale: [0, 10],
      backgroundColor: 'rgba(0, 173, 21, 0.2)',
      borderColor: 'rgba(0, 173, 21, 1)',
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