import "./index.css";

export default function Hero() {
  return (
    <div className="Hero_Container bbh-bogle-regular">
      <div className="Hero_Flex">
        <div className="Hero_Top">
          <h1>Enlist Today!</h1>
          <h1>The Stormtrooper Corp.</h1>
          <p>Protecting The Galaxy Since 19 BBY</p>
          <button>Enlist Now!</button>
        </div>
        <div className="Hero_Bottom">
          <span>
            Serve Your
            <span className="text-rotate">
              <span>
                <span className="px-4">
                  Galaxy
                </span>
                <span className="px-4 text-blue-600">World</span>
                <span className="px-4 text-red-600">Emperor</span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
