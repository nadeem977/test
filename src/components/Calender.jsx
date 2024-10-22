import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";


const Calender = () => {


    const [date, setDate] = useState(null);


    return (
        <div className=" flex justify-content-center h-fit">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>

    )
}

export default Calender