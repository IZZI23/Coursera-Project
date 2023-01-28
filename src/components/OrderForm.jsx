import React, { useState } from "react";

function OrderForm( {availableTimes,setAvailableTimes}) {
  const [date, setDate] = useState("");
  const [numbers, setNumbers] = useState("1");
  const [occasions, setOccasions] = useState("Meeting");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setAvailableTimes("");
    setNumbers("");
    setOccasions("");
    console.log("form submitted");
  };

  console.log(date);
  console.log(availableTimes);
  console.log(numbers);
  console.log(occasions);
  
  
  return (
    <section className="orderform">
      <div className="orderform__container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(event) => setDate({ startDate: event.target.value })}
          />
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            value={availableTimes}
            onChange={(event) => setAvailableTimes(event.target.value)}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numbers}
            onChange={(event) => setNumbers(event.target.value)}
          ></input>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasions}
            onChange={(event) => setOccasions(event.target.value)}
          >
            <option>Meeting</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>No occasion</option>
          </select>
          <input
            type="submit"
            value="SUBMIT"
            id="exception"
            className="exception"
          ></input>
        </form>
      </div>
    </section>
  );
}

export default OrderForm;
