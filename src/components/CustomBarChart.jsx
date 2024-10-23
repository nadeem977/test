import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
 
const data = [
  { name: 'Jan', Sales: 75, Appointments: 60 },
  { name: 'Feb', Sales: 50, Appointments: 25 },
  { name: 'Mar', Sales: 125, Appointments: 75 },
  { name: 'Apr', Sales: 85, Appointments: 90 },
  { name: 'May', Sales: 60, Appointments: 50 },
  { name: 'Jun', Sales: 40, Appointments: 60 },
  { name: 'Jul', Sales: 80, Appointments: 50 },
  { name: 'Aug', Sales: 85, Appointments: 60 },
  { name: 'Sep', Sales: 95, Appointments: 100 },
  { name: 'Oct', Sales: 120, Appointments: 80 },
  { name: 'Nov', Sales: 100, Appointments: 75 },
]; 
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const sales = payload[0].value;
    const appointments = payload[1].value;

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg text-sm">
        <p className="text-gray-900 font-bold text-base mb-1 flex justify-between">
          <span>{label}</span>
          <span className="text-[#5679FF] font-bold">${sales}</span>
        </p>
        <p className="text-gray-500">{`${sales} Sales`}</p>
        <p className="text-gray-500">{`${appointments} Appointments`}</p>
      </div>
    );
  }

  return null;
}; 
const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <div className="flex w-full justify-between gap-2 Inter flex-col md:flex-row">
      <h1 className="text-[20px] font-semibold">Revenue</h1>
      <div className="flex items-start sm:items-center justify-between gap-2 w-fit flex-col-reverse sm:flex-row">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-5 text-[#3F3F44] font-[500]">
            <div className={`w-[10px] h-[10px] rounded-full`} style={{ background: entry.color }} />
            <span >{entry.value}</span>
          </div>
        ))}
        <select className="mr-2 outline-0 border-none w-fit cursor-pointer text-[#3F3F44] bg-transparent">
          <option>Last 12 Month</option>
          <option value="2">Year 2024</option>
          <option value="3">Year 2023</option>
        </select>
      </div>
    </div>
  );
};
const yAxisFormatter = (value) => `$${value}`;
const CustomBarChart = () => {
  return (
    <div className='my-5'>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis tickFormatter={yAxisFormatter} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} layout="vertical" verticalAlign="top" />
          <Bar dataKey="Sales" fill="#5679FF" isAnimationActive={false} cursor={false} fillOpacity={1} />
          <Bar dataKey="Appointments" fill="#000000" isAnimationActive={false} cursor={false} fillOpacity={1} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
