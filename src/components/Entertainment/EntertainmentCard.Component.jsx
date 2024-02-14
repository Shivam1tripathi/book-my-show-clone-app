import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://i.pinimg.com/474x/58/96/38/589638ea299c5277710dedeeb1210486.jpg",
    "https://th.bing.com/th/id/OIP.3JrpyZy_d2bq9XuuP7Y33wHaKs?rs=1&pid=ImgDetMain",
    "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
    "https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/74637389.jpg",
    "https://toptenfamous.com/wp-content/uploads/2022/03/MV5BMGE3Yjg3NzItNjlmOS00YjY2LThiMDctMzM0NDA2NmExYTg4XkEyXkFqcGdeQXVyMTQ3ODQ3NTcz._V1_FMjpg_UX1000_-768x1112.jpg",
    "https://th.bing.com/th/id/OIP.Rgg8p8ioWy7MGHWaHTDd9wHaJ8?w=487&h=654&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.UrPRDvX-Zh3uPO9BesqFowHaKx?w=2000&h=2910&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.f6wSsTECv5UF-uPCgMWk_wHaKu?w=1105&h=1600&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.ek8WuNCUxkZQBtngD2a8MQHaJQ?w=640&h=800&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.WqvWiwoyMVA4UfZ7eoBgeQAAAA?w=474&h=663&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.eUIwffhN5R_cyGqWJwgQ9QAAAA?rs=1&pid=ImgDetMain",
    "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2019/04/16/Salman-Khan-s-Bharat-movie-latest-poster-.jpg?fit=650%2C866&quality=90&zoom=1&ssl=1",
  ];
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard src={image} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
