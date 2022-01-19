import React from "react";
import DayListItem from "./Daylistitem";

export default function DayList(props) {
  
  return(
    <ul>
      {props.days.map(day => {
        return (
          <DayListItem 
          key = {day.id}
          selected = {day.name === props.day}
          name = {day.name}
          spots = {day.spots}
          selectedDay = {props.day}
          setDay = {props.setDay}
          />
        )
      })}
    </ul>
  );
}