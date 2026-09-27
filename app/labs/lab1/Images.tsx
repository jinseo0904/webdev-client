export default function Images() {
    return (
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          alt="Starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpg"
          height="200px"
          alt="Tesla Bot (Optimus) humanoid robot"
        />
        <br />
        Another image from the internet:
        <br />
        <img
          id="wd-ai-image"
          width="200px"
          alt="Buzz Aldrin on the Moon"
          src="https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~medium.jpg"
        />
        <br />
        My favorite place in Boston:
        <br />
        <img
          id="wd-your-image"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ca/03/88/20190527-064004-largejpg.jpg?w=1000&h=-1&s=1"
          height="300px"
          alt="Memorial drive, along the Charles River"
        />
      </div>
    );
  }