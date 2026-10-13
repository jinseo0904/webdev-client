export default function Dimensions() {
    return (
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
          <div id="wd-ai-dimension" className="wd-ai-dimension-box">
            This sample box has a long sentence so you can see the text
            overflow its declared width and height.
          </div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">
            <p>This is another element with a portrait dimension.</p>
          </div>
        </div>
      </div>
    );
  }