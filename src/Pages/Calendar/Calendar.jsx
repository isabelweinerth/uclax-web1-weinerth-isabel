import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

// Poster Images
import BillyIdolPoster from "@/Pages/Staff/img/BillyIdolPoster.jpg";
import GratefulDeadPoster from "@/Pages/Staff/img/GratefulDeadPoster.jpg";
import HaimPoster from "@/Pages/Staff/img/HaimPoster.jpg";
import JimiHendrixPoster from "@/Pages/Staff/img/JimiHendrixPoster.jpeg";
import JohnnyPoster from "@/Pages/Staff/img/JohnnyPoster.jpeg";
import MacPoster from "@/Pages/Staff/img/MacPoster.jpg";
import PinkFloydPoster from "@/Pages/Staff/img/PinkFloydPoster.jpeg";
import TheWhoPoster from "@/Pages/Staff/img/TheWhoPoster.jpg";

function App() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    // object mapping to dates(only March 2024)
    const datePosterMap = {
        "2024-03-01": BillyIdolPoster,
        "2024-03-02": GratefulDeadPoster,
        "2024-03-03": HaimPoster,
        "2024-03-04": JimiHendrixPoster,
        "2024-03-05": JohnnyPoster,
        "2024-03-06": MacPoster,
        "2024-03-07": PinkFloydPoster,
        "2024-03-08": TheWhoPoster,
        "2024-03-09": BillyIdolPoster,
        "2024-03-10": GratefulDeadPoster,
        "2024-03-11": HaimPoster,
        "2024-03-12": JimiHendrixPoster,
        "2024-03-13": JohnnyPoster,
        "2024-03-14": MacPoster,
        "2024-03-15": PinkFloydPoster,
        "2024-03-16": TheWhoPoster,
        "2024-03-17": BillyIdolPoster,
        "2024-03-18": GratefulDeadPoster,
        "2024-03-19": HaimPoster,
        "2024-03-20": JimiHendrixPoster,
        "2024-03-21": JohnnyPoster,
        "2024-03-22": MacPoster,
        "2024-03-23": PinkFloydPoster,
        "2024-03-24": TheWhoPoster,
        "2024-03-13": BillyIdolPoster,
        "2024-03-25": GratefulDeadPoster,
        "2024-03-26": HaimPoster,
        "2024-03-27": JimiHendrixPoster,
        "2024-03-28": JohnnyPoster,
        "2024-03-29": MacPoster,
        "2024-03-30": PinkFloydPoster,
        "2024-03-31": TheWhoPoster,
    };

    return (
        <div>
            <CustomCalendar handleDateClick={handleDateClick} />
            {selectedDate && (
                <ImageWrapper>
                    {/* Render the image corresponding to the selected date */}
                    <img
                        src={
                            datePosterMap[
                                selectedDate.toISOString().split("T")[0]
                            ]
                        }
                        alt="Selected Date"
                    />
                </ImageWrapper>
            )}
        </div>
    );
}

const CustomCalendar = ({ handleDateClick }) => {
    return <Calendar onClickDay={handleDateClick} />;
};

const ImageWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export default App;
