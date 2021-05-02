// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export const getList = async (tag) => {
  const res = await axios(
    `https://res.cloudinary.com/jubalbattisti/image/list/${tag}.json`
  );
  console.log(res.data.resources);
  return res.data.resources;
};
