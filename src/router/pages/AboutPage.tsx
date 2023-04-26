import FooterView from "./components/footer/FooterView";
import NavView from "./components/nav/NavView";
import gradientCubes from "assets/graphics/gradient-cubes.jpg";
import rollerSkating from "assets/graphics/roller-skating.jpg";
import rubiksCube from "assets/graphics/rubiks-cube.jpg";

const AboutPage = () => {
  // TODO: add responsive pictures
  return (
    <>
      <NavView />
      <div className="about_grid">
        <section className="about_header about_grid-header-container"></section>
        <h2 className="about_grid-header"> About Digital Organizer </h2>
        <h5 className="about_grid-subheader">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at dolor
          fugiat tempore a ducimus aperiam id magnam impedit, recusandae sed
          porro illum facere non? Autem expedita veritatis nobis et accusantium
          obcaecati, praesentium perspiciatis beatae!
        </h5>
        <div className="about_grid-quote">
          <h6>
            “Give me six hours to chop down a tree and I will spend the first
            four sharpening the axe.”
          </h6>
          <p className="text_caption">- Abraham Lincoln </p>
        </div>
        <div className="about_grid-chapters">
          <h3>Lorem</h3>
          <h3>Ipsum</h3>
          <h3>Dolor</h3>
        </div>
        <img className="about_grid-image1" src={rubiksCube} alt="Rubiks Cube" />
        <img
          className="about_grid-image2"
          src={rollerSkating}
          alt="Rubiks Cube"
        />
        <img
          className="about_grid-image3"
          src={gradientCubes}
          alt="Rubiks Cube"
        />
        <main className="about_main">
          <h3>What about a purpose?</h3>
          <p className="text_body-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quidem, totam quis vero dicta ipsam ullam aliquam incidunt corrupti
            debitis odit consectetur autem, omnis deleniti?
          </p>
          <div className="about_main-text-columns">
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p className="text_body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nobis enim numquam magnam tenetur? Explicabo exercitationem
              nesciunt qui recusandae illum?
            </p>
          </div>
          <p className="text_body-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eum
            odio possimus magnam esse aliquam error officiis numquam, sapiente
            explicabo repellendus atque culpa quia dolorum perspiciatis. Labore
            nihil quaerat quisquam laborum est distinctio exercitationem nostrum
            nulla officia. Ea ut cum, sunt atque possimus minima facere.
          </p>
        </main>
      </div>
      <FooterView />
    </>
  );
};

export default AboutPage;
