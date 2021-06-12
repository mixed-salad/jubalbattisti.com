import Head from "next/head";
import Link from "next/link";
import { Image, Transformation } from "cloudinary-react";
import styles from "./../../styles/projects.module.scss";
import { motion } from "framer-motion";

let easing = [0.175, 0.85, 0.42, 0.96];
const variants = {
  initial: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1, transition: { duration: 1, ease: easing } },
  exit: { opacity: 0, scale: 2, transition: { duration: 1, ease: easing } },
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Projects</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <div className="main">
          <div className={styles.projectsWrapper}>
            <Link href="/projects/p4">
              <div className={styles.project}>
                <Image publicId="Jubal_battisti/p4_1_fkaxax.jpg" />
                <h3 className={styles.projectTitle}>P4</h3>
              </div>
            </Link>
            <Link href="/projects/works-in-process">
              <div className={styles.project}>
                <Image publicId="Jubal_battisti/process/process_2_j3tipo.jpg" />
                <h3 className={styles.projectTitle}>Works in Process</h3>
              </div>
            </Link>
            <Link href="/projects/performance">
              <div className={styles.project}>
                <Image publicId="Jubal_battisti/performance/190212_Staatsballett_Berlin_Distant_Matter_by_Jubal_Battisti_0099_nj8lqj.jpg" />
                <h3 className={styles.projectTitle}>Performace</h3>
              </div>
            </Link>
            <Link href="/projects/moving">
              <div className={styles.project}>
                <Image publicId="Jubal_battisti/performance/190212_Staatsballett_Berlin_Distant_Matter_by_Jubal_Battisti_1594_ul1upp.jpg" />
                <h3 className={styles.projectTitle}>Moving</h3>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
