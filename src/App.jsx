import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import one from "./assets/1.webp";
import two from "./assets/2.jpg";
import three from "./assets/3.jpg";
import four from "./assets/4.jpg";
import five from "./assets/5.jpg";
import six from "./assets/6.jpg";
import hollywood from "./assets/222.mp3";

function App() {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const music = useRef(null);
  const images = [one, two, three, four, five, six];

  const playHandle = () => {
    music.current.play();
  };

  return (
    <motion.div className="overflow-hidden relative h-screen w-[320px] shadow-lg mx-auto">
      <audio ref={music} src={hollywood}></audio>

      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -1250 }}
        className="grid grid-flow-col gap-x-4 pt-10 pl-5"
      >
        {images.map((image, i) => {
          return (
            <motion.div
              key={i}
              layoutId={image}
              onClick={() => setSelected(image)}
              className="w-60 rounded-md"
            >
              <img
                src={image}
                alt=""
                className="object-cover w-full h-48 rounded-lg"
              />
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence type="crossfade">
        {selected && (
          <motion.div
            layoutId={selected}
            className="fixed top-0 h-full p-6 bg-black overflow-scroll w-[320px] mx-auto"
          >
            <div
              className=" bg-white mb-5 border   ml-auto pb-[2px] w-7 h-7 rounded-full flex justify-center items-center"
              onClick={() => setSelected(null)}
            >
              <p className="text-xl"> &times;</p>
            </div>
            <section>
              <motion.img
                src={selected}
                alt=""
                className="overflow-hiddden rounded-lg "
              />

              <div className="text-white flex justify-between items-center mt-5">
                <div>
                  <p className="text-xl">Post Malone</p>
                  <p className="text-sm">Hollywood's Bleeding</p>
                </div>

                <motion.p
                  layoutId="play"
                  layout
                  className="bg-yellow-500 p-2 rounded-full flex justify-center items-center"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    // fill="#ffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="30px"
                    height="30px"
                    viewBox="0 0 38.083 38.083"
                    xml:space="preserve"
                    className="pl-1 text-white"
                  >
                    <g>
                      <g>
                        <motion.path
                          d="M6.655,36.904V1.177c0-0.461,0.269-0.879,0.687-1.07c0.419-0.191,0.911-0.121,1.26,0.178l22.416,17.568
			c0.258,0.223,0.406,0.545,0.41,0.885c0.004,0.326-0.143,0.663-0.396,0.889L8.616,37.784c-0.347,0.31-0.842,0.385-1.265,0.194
			C6.927,37.787,6.655,37.368,6.655,36.904z M9.01,3.744v30.535l19.449-15.52L9.01,3.744z"
                        />
                      </g>
                    </g>
                  </svg>
                </motion.p>
              </div>

              <p className="text-white mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium numquam repellendus quia quidem beatae tempore,
                optio temporibus iusto dicta explicabo ratione soluta? Nihil
                debitis aspernatur repudiandae distinctio quod officia
                accusantium!
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  fuga dolorem, delectus alias aperiam ea sunt obcaecati modi et
                  nesciunt numquam. Impedit minus quisquam aliquid ratione
                  nostrum magni assumenda nihil!
                </p>
              </p>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence type="crossfade">
        <div>
          {show && (
            <motion.div
              layout
              layoutId="play"
              className="bg-yellow-500 absolute top-0 w-[320px] h-full"
            >
              <div className="relative">
                <img src={selected} alt="" className="" />
                <p
                  className="absolute top-5 left-5 text-black bg-white pb-1 w-7 h-7 rounded-full flex justify-center items-center"
                  onClick={() => setShow(!show)}
                >
                  <p className="text-xl"> &times;</p>
                </p>
              </div>

              <div className="mt-5 flex p-5 justify-between items-center text-white">
                <p className="">01. Hollywood's Bleeding</p>
                <motion.p
                  whileTap={{ scale: 0.8 }}
                  className="px-4 py-1 bg-black text-white"
                  onClick={playHandle}
                >
                  Play
                </motion.p>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
