import {useState, useEffect} from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`api/appointments/${id}`, appointment).then((response) => {
      setState({
        ...state,
        appointments,
      });
    })
  }

  function cancelInterview(id) {
    //Below we are updating the existing appointment & setting the interview
    //to null
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`api/appointments/${id}`, )
    .then((response) => {
      setState({
        ...state,
        appointments,
      });
    })
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((all) => {
      const [days, appointments, interviewers] = all;
      setState({
        ...state,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data,
      });
    });
  }, []);

  return {setDay, bookInterview, cancelInterview, state};
};