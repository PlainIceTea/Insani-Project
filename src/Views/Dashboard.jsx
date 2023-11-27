import { Form } from "react-router-dom";
import Berita from "../Component/Dashboard/Berita";
import Desc from "../Component/Dashboard/Desc";
import Hero from "../Component/Dashboard/Hero";
import Layanan from "../Component/Dashboard/Layanan";
import Value from "../Component/Dashboard/Value";
import Forms from "../Component/Dashboard/Forms";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <Desc />
      <Value />
      <Layanan />
      <Berita />
      <Forms />
    </>
  );
};

export default Dashboard;
