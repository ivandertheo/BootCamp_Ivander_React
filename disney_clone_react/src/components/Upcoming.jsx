import snowwhite from "../assets/upcoming_snowwhite.jpg";
import mermaid from "../assets/upcoming_mermaid.jpg";
import america from "../assets/upcoming_amerika.jpg";

function Upcoming() {
  return (
    <div className="upcoming-container">
      <h2>Film-Film Baru Dan Akan Datang</h2>
      <h3>Jangan lupa untuk menyaksikan film-film ini</h3>

      <div className="upcoming-card">
        {[ 
          { img: snowwhite, title: "SNOWWHITE" },
          { img: mermaid, title: "THE LITTLE MERMAID" },
          { img: america, title: "CAPTAIN AMERICA" }
        ].map((item, i) => (
          <div className="upcoming-content" key={i}>
            <div className="img-wrapper">
              <img src={item.img} />
            </div>
            <h2>{item.title}</h2>
            <p>STREAM SEKARANG</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
