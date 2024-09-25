import axios from "axios";

const fetchData = async (url) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: url,
    });
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    // setLoading(false);
  }
};

export default fetchData;
