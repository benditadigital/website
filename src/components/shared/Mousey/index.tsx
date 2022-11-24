import "./styles.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Mousey() {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          animate={
            inView
              ? { opacity: 1, transform: "translateX(0px)" }
              : { opacity: 0 }
          }
          transition={{ duration: 1 }}
          className="mousey"
        >
          <div className="scroller"></div>
        </motion.div>
      )}
    </InView>
  );
}

export default Mousey;
