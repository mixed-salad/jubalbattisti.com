import Head from 'next/head';
import styles from './../../styles/p4.module.scss';
import Carousel from '../../components/Carousel';

const Dueto = () => {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | DUETO</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <main className={styles.p4Main}>
          <section className={styles.description}>
            <p>
              <em>
                <strong>DUETO</strong>
              </em>
            </p>
            <p>A collaboration with ceramics artist Jojo Corväiá</p>
            <p className={styles.link}>
              <a href="https://jojocorvaia.com.de/">{'>>'} Visit website</a>
            </p>
          </section>
          <section className={styles.photoSection}>
            <Carousel category="dueto" />
          </section>
        </main>
      </div>
    </>
  );
};

export default Dueto;