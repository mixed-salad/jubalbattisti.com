import Head from "next/head";
import photos from "./../../photos.json";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Projects</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div>
        <h1>Projects</h1>
        {photos.p4.map((photo) => (
          <Image src={photo} width={400} height={500} />
        ))}
      </div>
    </>
  );
};

export default Projects;
