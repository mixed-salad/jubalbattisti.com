// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export const getList = async (tag) => {
  const url = `https://res.cloudinary.com/jubalbattisti/image/list/${tag}.json`;
  const res = await axios(url);
  console.log(res.data.resources);
  return res.data.resources;
};
