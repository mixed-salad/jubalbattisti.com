import Head from "next/head";
import Link from "next/link";
import { Image, Transformation } from "cloudinary-react";
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
    scale: 1,
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
  const handleMouseOver = (project) => {
    const target = document.getElementById(project);
    target.classList.add(styles.hover);
  };
  const handleMouseLeave = (project) => {
    console.log(project, "handling mouse leave");

    const target = document.getElementById(project);
    target.classList.remove(styles.hover);
  };

  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Projects</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      {/* Framer motion transitions */}
      <div className="main">
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={containerVariants}
          className={styles.projectsWrapper}
        >
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/moving">
              <div id="moving">
                <img src="/Thumnails/moving_thumbnail.png" />
                <h3 className={styles.projectTitle}>moving</h3>
              </div>
            </Link>
          </motion.div>
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/p4">
              <div
                id="p4"
                onMouseOver={() => handleMouseOver("p4")}
                onMouseLeave={() => handleMouseLeave("p4")}
              >
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
              <div id="process">
                <Image publicId="Jubal_battisti/process/process_2_j3tipo.jpg" />
                <h3 className={styles.projectTitle}>works in process</h3>
              </div>
            </Link>
          </motion.div>
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/performance">
              <div id="performance">
                <Image publicId="Jubal_battisti/performance/190212_Staatsballett_Berlin_Distant_Matter_by_Jubal_Battisti_0099_nj8lqj.jpg" />
                <h3 className={styles.projectTitle}>performance</h3>
              </div>
            </Link>
          </motion.div>
          <motion.div className={styles.project} variants={itemVariants}>
            <Link href="/projects/dueto">
              <div id="dueto">
                <Image publicId="Jubal_battisti/dueto/DUETO_Malika-133-Edit_by_Jubal_Battisti_mygtiu.jpg" />
                <h3 className={styles.projectTitle}>DUETO</h3>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
