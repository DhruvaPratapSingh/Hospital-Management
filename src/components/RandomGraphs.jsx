import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { LineChart, Line, Legend} from "recharts";
const generateRandomData = () => {
  return Array.from({ length: 6 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 20,
  }));
};

const RandomGraph = () => {
  const data = generateRandomData();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-semibold mb-2">Random Graph</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3182ce" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


const data = [
  { name: "Jan", inPatients: 50, outPatients: 30 },
  { name: "Feb", inPatients: 55, outPatients: 35 },
  { name: "Mar", inPatients: 75, outPatients: 45 },
  { name: "Apr", inPatients: 70, outPatients: 50 },
  { name: "May", inPatients: 55, outPatients: 40 },
  { name: "Jun", inPatients: 50, outPatients: 38 },
];

const PatientStatisticsChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Patient Statistics</h2>
        <select className="border rounded px-2 py-1 text-sm">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="inPatients" stroke="blue" dot={{ stroke: "blue", r: 3 }} />
          <Line type="monotone" dataKey="outPatients" stroke="green" dot={{ stroke: "green", r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
  


export  {RandomGraph,PatientStatisticsChart};
