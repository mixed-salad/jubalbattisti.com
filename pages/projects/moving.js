import Head from "next/head";
import ReactPlayer from "react-player";
import videos from "./../../videos.json";
import styles from "./../../styles/moving.module.scss";

const Moving = () => {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Video works</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div>
        <div className={styles.header}>
          <h1>MOTION</h1>
        </div>
        <div className="main">
          <h2 className={styles.category}>Promotional contents</h2>
          <div className={styles.contents}>
            {videos.map((video) => (
              <div className={styles.videoWrapper}>
                <div className={styles.react_player}>
                  <ReactPlayer
                    url={video.url}
                    light={true}
                    width="auto"
                    heigh="auto"
                    controls
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </>
  );
};

export default Moving;
