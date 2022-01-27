
export function getAppointmentsForDay(state, dayName) {
  //conditional that returns empty array if the days data (state.days) is empty
  if (state.days.length <= 0) return [];
  //Below we are checking to see if the selected day matches the day that is passed in our parameter (dayName)
  const selectedDay = state.days.filter(day => day.name === dayName)[0]
  if (!selectedDay) return [];
  const selectedDaysAppointments = selectedDay.appointments.map(appointmentId => state.appointments[appointmentId])
  return selectedDaysAppointments
};

export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewDetailsFromState = state.interviewers[interview.interviewer]
  const interviewData = {
    student: interview.student,
    interviewer: interviewDetailsFromState
  }
  return interviewData
  
};

export function getInterviewersForDay(state, dayName) {
  //conditional that returns empty array if the days data (state.days) is empty
  console.log("check out state.days from your function--->:", state.days);
  if (state.days.length <= 0) return [];
  //Below we are checking to see if the selected day matches the day that is passed in our parameter (dayName)
  const selectedDay = state.days.filter(day => day.name === dayName)[0]
  console.log("what it looks like after your filter--->:", selectedDay);
  if (!selectedDay) return [];
  const selectedDaysInterviewers = selectedDay.interviewers.map(interviewerId => state.interviewers[interviewerId])
  console.log("what it looks like afer you map===>:",selectedDaysInterviewers);
  return selectedDaysInterviewers
};
