import axios from "axios";

const URL =
  "http://api.weatherbit.io/v2.0/forecast/daily?city=Valencia&key=92d1730d09b748cfb15d692f42baff45";
const API_KEY = "92d1730d09b748cfb15d692f42baff45";

const fetchData = async (query: string) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};

// const [data, setData] = useState([]);
// const [inputValue, setInputValue] = useState("");

// useEffect(() => {
//   const fetchData = async () => {
//     const result = await axios(
//       "http://api.weatherbit.io/v2.0/forecast/daily?city=Valencia&key=92d1730d09b748cfb15d692f42baff45"
//     );

//     setData(result.data);
//   };

//   fetchData();
// }, []);

// const showData = () => console.log(data);

// const updateInfo = (e: any) => {
//   setInputValue(e);
// };

// const showInfo = () => {
//   console.log(inputValue);
// };

export default fetchData;
