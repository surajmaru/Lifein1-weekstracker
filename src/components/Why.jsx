// import { motion } from "framer-motion";

// export default function Why(){
//     return(
//         <>
//         <section className="work-section">

//             <div className="work-title">
//                 <p>Why visualize life this way?</p>
//             </div>
//             <div className="work-div-2">
//                 <p className="p1">Time feels infinite — until you see it.</p>
//                 <p className="p2">Weeks are small.</p>
//                 <p className="p3">Life is not.</p>
//             </div>

//             <button className='top-btn-3' onClick={() => navigate("/create")}>Create now</button>
//         </section>
//         </>
//     )
// }



import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Why() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="work-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="work-title">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Why visualize life this way?
        </motion.p>
      </div>

      <motion.div
        className="work-div-2"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.35 }
          }
        }}
      >
        {[
          "Time feels infinite — until you see it.",
          "Weeks are small.",
          "Life is not."
        ].map((text, i) => (
          <motion.p
            key={i}
            className={`p${i + 1}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

        <div data-aos="fade-down" data-aos-duration="2500">
            <button className='top-btn-3' onClick={() => navigate("/create")}>Create now</button>
        </div>

    </motion.section>
  );
}
