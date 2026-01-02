function MovieWrapper() {
  return (
    <div className="wrapper">
      {[
        { title: "NEZHA 2", year: "2025" },
        { title: "AVATAR 3: FIRE AND ASH", year: "2025" },
        { title: "SISU 2", year: "2025" },
        { title: "AVENGER: DOOMSDAY", year: "2026" },
        { title: "PERCY JACKSON", year: "2024" },
        { title: "FANTASTIC 4", year: "2025" },
        { title: "FROZEN 2", year: "2023" }
      ].map((movie, index) => (
        <div key={index}>
          <div className="content">
            <h2>{movie.title}</h2>
            <span>{movie.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieWrapper;
