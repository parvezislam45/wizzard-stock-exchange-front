import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Chart = () => {
  const [trades, setTrades] = useState([]);
  useEffect(() => {
    fetch('https://stockapi-i947.onrender.com/api')
      .then((res) => res.json())
      .then((fetchedData) => {
        setTrades(fetchedData);
        console.log(fetchedData)
      
      });
  }, [trades]);
    
      
    return (
        <div>
           <LineChart
        width={1200}
        height={500}
        data={trades}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="description" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="displaySymbol"
          stroke="#82ca9d"
        />
      </LineChart>
        
        </div>
    );
};

export default Chart;