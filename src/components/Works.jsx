// import { motion } from "framer-motion";

// export default function Works(){
//     return(
//         <>
//         <section className="work-section">

//             <div className="work-title">
//                 <p>Simple. Visual. Eye-opening.</p>
//             </div>
//             <div className="work-div">
//                 <p className="p1">01 <span>Enter your birth date</span></p>
//                 <p className="p2">02 <span>Visualize your entire life in weeks</span></p>
//                 <p className="p3">03 <span>Export it as a wallpaper</span></p>
//             </div>
//             <div className="work-desc">
//                 <p>Every dot is time you’ll never get back.</p>
//             </div>
//         </section>
//         </>
//     )
// }

import { motion } from "framer-motion";

export default function Works() {
  return (
    <motion.section
      className="work-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="work-title">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Simple. Visual. Eye-opening.
        </motion.p>
      </div>

      <motion.div
        className="work-div"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {[
          "Enter your birth date",
          "Visualize your entire life in weeks",
          "Export it as a wallpaper"
        ].map((text, i) => (
          <motion.p
            key={i}
            className={`p${i + 1}`}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {String(i + 1).padStart(2, "0")}{" "}
            <span>{text}</span>
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="work-desc"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>Every dot is time you’ll never get back.</p>
      </motion.div>

      <div className="spacer-2"></div>
    </motion.section>

    
  );
}
