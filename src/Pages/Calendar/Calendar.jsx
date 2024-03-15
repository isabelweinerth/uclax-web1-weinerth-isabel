import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <CustomCalendar />
        </div>
    );
}

const CustomCalendar = () => {
    return <Calendar />;
};

export default App;

const CalendarStyled = styled.div``;
