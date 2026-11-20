import "./index.css";
import Palpatine from "/Palpatine/Emperor_Sidious.jpg";
import MasAmedda from "/MasAmedda/Mas_Amedda.jpg";
import Vader from "/Vader/Darth_Vader.jpg";
import Tarkin from "/Tarkin/Tarkin.webp";
import Card from "../../ReUse/Card";

export default function Team() {
  return (
    <section className="Team_Container bbh-bogle-regular">
      <h1>Meet Your Leadership</h1>
      <div className="Team_Grid">
        <Card Image={Palpatine} Name="Palpatine" Title="Emperor" />
        <Card Image={Vader} Name="Vader" Title="Supreme Commander" />
        <Card Image={MasAmedda} Name="Mas Amedda" Title="Grand Vizier" />
        <Card Image={Tarkin} Name="Wilhuff Tarkin" Title="Grand Moff" />
      </div>
    </section>
  );
}
