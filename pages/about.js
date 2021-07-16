import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from './../styles/about.module.scss';

const About = () => {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | About</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <motion.div initial="initial" animate="complete" className={styles.main}>
        <h1>Jubal Battisti</h1>
        <p>
          is a Berlin-based, US-born photographer, videographer, and performer.
        </p>
        <p>
          He is a graduate of The Juilliard School and the New York Institute of
          Photography.
        </p>
        <p>
          Jubal danced with Cedar Lake Contemporary Ballet in NYC for eight
          years, touring across the US and Europe. He joined the
          GöteborgsOperans Danskompani in Sweden in 2012.{' '}
        </p>
        <p>
          Since moving to Berlin in 2014, Jubal has freelanced as a performer,
          photographer and videographer, collaborating to make still and moving
          imagery for dance makers Moritz Ostruschniak, Sebastian Mattias, Josep
          Caballero García, Martin Hansen, Sergio Matis and Roderick George. He
          has also created marketing imagery for companies such as Kollektiv
          52°07, Theater Bielefeld, Of Curious Nature, Skånes Dansteater, Dance
          On Ensemble, and Staatsballett Berlin.
        </p>
      </motion.div>
    </>
  );
};

export default About;
