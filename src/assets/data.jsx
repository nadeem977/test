
import { MdOutlineDashboard } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";
import { SiCivicrm } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LiaProductHunt } from "react-icons/lia";
import { GoGraph } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import downGRP from "../assets/down.png"
import highGRP from "../assets/high.png"
import Imgpeti from "../assets/pati.png"
import Imgcuting from "../assets/cuting.png"
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import pettiImg from "../assets/petti.png"

export const sidebardata = [
    {
        icon: <MdOutlineDashboard />,
        title: "Dashboard"
    },
    {
        icon: <RiCalendar2Line />,
        title: "Calender"
    },
    {
        icon: <AiOutlineDollarCircle />,
        title: "Sales"
    },
    {
        icon: <SlWallet />,
        title: "Expenses"
    },
    {
        icon: <BsPerson className="icon" />,
        title: "Employee"
    },
    {
        icon: <BsPersonPlus />,
        title: "Customers"
    },
    {
        icon: <LiaProductHunt />,
        title: "Product"
    },
    {
        icon: <MdOutlinePersonSearch />,
        title: "HRM"
    },
    {
        icon: <SiCivicrm />,
        title: "CRM"
    },
    {
        icon: <TbSettingsAutomation />,
        title: "Automation"
    },
    {
        icon: <HiOutlineSpeakerphone />,
        title: "Marketing"
    },
    {
        icon: <GoGraph />,
        title: "Reports"
    },
    {
        icon: <BsPerson className="icon" />,
        title: "My Account"
    },

]
export const SalseUpdate = [
    {
        icon: <RiMoneyDollarCircleLine />,
        title: "Total Revenue",
        rate: "$1,682",
        GPH: highGRP
    },
    {
        icon: <BsPersonPlus />,
        title: "Total Customers",
        rate: "60",
        GPH: highGRP
    },
    {
        icon: <RiCalendar2Line />,
        title: "Total Appointments",
        rate: "78",
        GPH: downGRP
    },
]
export const appointmentData = [
    {
        time: "10:30 -AM 11:00 AM",
        title: "Menicuer",
        name: "fabiha arshad",
        img: Imgpeti,
        month: 'Oct',
        date: "23"
    },
    {
        time: "10:30 -AM 11:00 AM",
        title: "Hire Day",
        name: "Menicuer",
        img: Imgcuting,
        month: 'Oct',
        date: "23"
    },
    {
        time: "10:30 -AM 11:00 AM",
        title: "Menicuer",
        name: "fabiha arshad",
        img: Imgpeti,
        month: 'Oct',
        date: "23"
    },
]

export const TeamMembers = [
    {
        name: 'Alina Arshad',
        book: "24 Appointments",
        img: team1
    },
    {
        name: 'Irtaza Zaidi',
        book: "20 Appointments",
        img: team2
    },
    {
        name: 'Faheem Altaf',
        book: "20 Appointments",
        img: team3
    },

]

export const ProductData = [
    {
        name: 'Menicure',
        book: "24 Services",
        img: pettiImg
    },
    {
        name: 'Menicure',
        book: "20 Services",
        img: pettiImg
    },
    {
        name: 'Menicure',
        book: "15 Services",
        img: pettiImg
    },

]
export const TableData = [
    {
        service: {
            img: pettiImg, 
            name: "Manicure",
            date: "9 July, 2022"
        },
        Employee: "Irtaza Zaidi",
        Sale: "01",
        Earnings: "$100.5"
    },
    {
        service: {
            img: pettiImg, 
            name: "Pedicure",
            date: "10 July, 2022"
        },
        Employee: "Irtaza Zaidi",
        Sale: "10",
        Earnings: "$150.0"
    },
    {
        service: {
            img: pettiImg, 
            name: "Facial",
            date: "11 July, 2022"
        },
        Employee: "Irtaza Zaidi",
        Sale: "05",
        Earnings: "$200.0"
    },
    {
        service: {
            img: pettiImg, 
            name: "Haircut",
            date: "12 July, 2022"
        },
        Employee: "Irtaza Zaidi",
        Sale: "03",
        Earnings: "$75.5"
    }
];
