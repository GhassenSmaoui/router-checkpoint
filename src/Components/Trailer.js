import React from "react";

const Trailer = (props ) => {
    console.log(props)
  return (
    <div>
      {props.movieList
        .filter((el) => el.title === props.match.params.title)
        .map((el) => (
          <div>
            <h3>{el.title}</h3>
            <h3>{el.description}</h3>
            <iframe
              width="560"
              height="315"
              src={el.trailer}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
    </div>
  );
};

export default Trailer;
