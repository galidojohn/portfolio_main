import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://i.pinimg.com/236x/cd/51/ec/cd51ec26bf512c5fe37ed9140c752b41.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo similique consequuntur ratione necessitatibus odio, quas et. Perspiciatis aspernatur exercitationem maiores deserunt iusto, officiis recusandae incidunt libero sint perferendis esse? Quae?",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://i.pinimg.com/236x/cd/51/ec/cd51ec26bf512c5fe37ed9140c752b41.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo similique consequuntur ratione necessitatibus odio, quas et. Perspiciatis aspernatur exercitationem maiores deserunt iusto, officiis recusandae incidunt libero sint perferendis esse? Quae?",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://i.pinimg.com/236x/cd/51/ec/cd51ec26bf512c5fe37ed9140c752b41.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo similique consequuntur ratione necessitatibus odio, quas et. Perspiciatis aspernatur exercitationem maiores deserunt iusto, officiis recusandae incidunt libero sint perferendis esse? Quae?",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://i.pinimg.com/236x/cd/51/ec/cd51ec26bf512c5fe37ed9140c752b41.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo similique consequuntur ratione necessitatibus odio, quas et. Perspiciatis aspernatur exercitationem maiores deserunt iusto, officiis recusandae incidunt libero sint perferendis esse? Quae?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start" , "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
            </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
