import { useEffect, useState } from "react";
import Addnumber from "./components/Addnumber";
import Addtext from "./components/Addtext";
import Btncontainer from "./components/Btncontainer";
import Divider from "./components/Divider";

const firstAdvisor = {
  slip: {
    id: 0,
    advice: "Please Wait",
  },
};

const App = () => {
  const [advisor, setAdvisor] = useState(firstAdvisor);

  useEffect(() => {
    advisorSearch();
  }, []);

  const advisorSearch = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");

      if (!res.ok) {
        throw "API Error";
      }

      const newAddvisor = await res.json();
      setAdvisor(newAddvisor);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <Addnumber add={advisor} />
        <Addtext add={advisor} />
        <Divider />
        <Btncontainer advisorSearch={advisorSearch} />
      </div>
    </>
  );
};

export default App;
