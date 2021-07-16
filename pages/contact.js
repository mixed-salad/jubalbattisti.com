import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from './../styles/contact.module.scss';

const variants = {
  initial: {
    opacity: 0,
    y: 10
  },
  complete: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5
    }
  }
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Contact</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <motion.div
        initial="initial"
        animate="complete"
        exit="exit"
        variants={variants}
        className={styles.main}
      >
        <p>jubalbattisti@gmail.com</p>
      </motion.div>
    </>
  );
};

export default Contact;
