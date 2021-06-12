import Head from "next/head";
import { useState, useEffect } from "react";
import { getList } from "../api/cloudinary";
import SinglePerformance from "./../../components/SinglePerformance";

const Performance = () => {
  const [photoList, setPhotoList] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getList("performance");
      setPhotoList(list);
      const companiesList = [];
      for (let imgObject of list) {
        if (!companiesList.includes(imgObject.context.custom.company)) {
          companiesList.push(imgObject.context.custom.company);
        }
      }
      // console.log(companiesList);
      setCompanies(companiesList);
    };
    fetchList();
  }, []);

  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Performances</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <h1>Performance</h1>
        {!!companies.length &&
          companies.map((company) => (
            <SinglePerformance
              key={company}
              company={company}
              photoList={photoList}
            />
          ))}
      </div>
    </>
  );
};

export default Performance;
