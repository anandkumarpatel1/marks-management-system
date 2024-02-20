import React from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import '../styles/Home.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { UserState } from "../context/UserProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Home = () => {
  const { loading, setLoading } = UserState();
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 3, 85],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="home">
            <Line options={options} data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
