import React from "react";
import { BsFileText } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <AiOutlineDollarCircle className="card_icon1" />
          </div>
          <div className="inner-text">
            <h6 className="text-value">Earning</h6>
            <h4 className="text-price ">$198K</h4>
            <h6 className="text-increment">
              <span className="text-increment-value">{"\u2191"} 37.8%</span>this
              month
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-inner1">
            <BsFileText className="card_icon2" />
          </div>
          <div className="inner-text">
            <h6 className="text-value">Orders</h6>
            <h4 className="text-price ">$2.4K</h4>
            <h6 className="text-increment">
              <span className="text-increment-value1">{"\u2193"} 2%</span>this
              month
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-inner2">
            <TbMoneybag className="card_icon3" />
          </div>
          <div className="inner-text">
            <h6 className="text-value">Balance</h6>
            <h4 className="text-price ">$2.4K</h4>
            <h6 className="text-increment">
              <span className="text-increment-value1">{"\u2193"}2%</span>this
              month
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-inner3">
            <FaShoppingBag className="card_icon4" />
          </div>
          <div className="inner-text">
            <h6 className="text-value">Total Sales</h6>
            <h4 className="text-price ">$89K</h4>
            <h6 className="text-increment">
              <span className="text-increment-value">↑11%</span> this week
            </h6>
          </div>
        </div>
      </div>
      <div className="head">
        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#9f00ff" />
              <Bar dataKey="uv" fill="#00a23a" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#9f00ff"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#00a23a"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
