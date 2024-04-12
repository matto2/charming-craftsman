import { AddToCalendarButton } from 'add-to-calendar-button-react';

export default function Add2Calendar() {
    return (

<AddToCalendarButton
  name="Open House on King Street"
  options={['Apple','Google']}
  location="King Street"
  startDate="2024-05-11"
  endDate="2024-05-11"
  startTime="11:00"
  endTime="13:00"
  timeZone="America/Los_Angeles"
></AddToCalendarButton>

);
}
