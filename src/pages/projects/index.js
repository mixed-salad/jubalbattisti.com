import Head from "next/head";
import Link from "next/link";
import { Image } from "cloudinary-react";
import styles from "./../../styles/projects.module.scss";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  enter: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Projects = () => {
  return (
    <div className={styles.projectPage}>
      <Head>
        <title>Jubal Battisti Photography | Projects</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      {/* Framer motion transitions */}
      <main className="main">
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={containerVariants}
          className={styles.projectsWrapper}
        >
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/moving">
              <div className={styles.projectContainer} id="moving">
                <img src="/Thumnails/moving_thumbnail.png" />
                <h3 className={styles.projectTitle}>motion</h3>
              </div>
            </Link>
          </motion.div>
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/p4">
              <div id="p4" className={styles.projectContainer}>
                <Image publicId="Jubal_battisti/p4/190409_P_4_Coming_Society_by_Jubal_Battisti_114-Edit_copy_hzeued.jpg" />
                <h3 className={styles.projectTitle}>
                  P^4
                  <br />
                  <span>
                    post
                    <br />
                    performance
                    <br />
                    portrait
                    <br />
                    project
                  </span>
                </h3>
              </div>
            </Link>
          </motion.div>
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/works-in-process">
              <div id="process" className={styles.projectContainer}>
                <Image publicId="Jubal_battisti/process/process_2_j3tipo.jpg" />
                <h3 className={styles.projectTitle}>works in process</h3>
              </div>
            </Link>
          </motion.div>
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/performance">
              <div id="performance" className={styles.projectContainer}>
                <Image publicId="Jubal_battisti/performance/190212_Staatsballett_Berlin_Distant_Matter_by_Jubal_Battisti_0099_nj8lqj.jpg" />
                <h3 className={styles.projectTitle}>performance</h3>
              </div>
            </Link>
          </motion.div>
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/dueto">
              <div id="dueto" className={styles.projectContainer}>
                <Image publicId="Jubal_battisti/dueto/DUETO_Malika-133-Edit_by_Jubal_Battisti_mygtiu.jpg" />
                <h3 className={styles.projectTitle}>DUETO</h3>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </main>
      <section className={styles.sponcers}>
        <p className={styles.sponcersText}>
          Unterstützt durch DIEHL+RITTER/TANZPAKT RECONNECT, gefördert von
          der/dem Beauftragten der Bundesregierung für Kultur und Medien im
          Rahmen der Initiative NEUSTART KULTUR. Hilfsprogramm Tanz
        </p>
        <div className={styles.footerImgWrapper}>
          <Link href="https://www.diehl-ritter.de/">
            <a target="_blank">
              <img src="logos/DR_Web.jpeg" alt="DR logo" />
            </a>
          </Link>
          <Link href="https://www.bundesregierung.de/breg-%20de/bundesregierung/staatsministerin-fuer-kultur-und-medien/kultur/1772990-1772990">
            <a target="_blank">
              <img src="logos/Neustart_Kultur.svg" alt="DR logo" />
            </a>
          </Link>
          <Link href="https://www.bundesregierung.de/breg-de/bundesregierung/staatsministerin-fuer-kultur-und-medien">
            <a target="_blank">
              <img src="logos/BKM_Web_de.gif" alt="BKM logo" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
