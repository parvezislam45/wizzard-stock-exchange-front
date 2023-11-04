
import Chart from "../../Chart/Chart";
import Banner from "./Banner";
import Media from "./Media";
import Member from "./Member";
import Ratio from "./Ratio";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Ratio/>
           <Chart/>
           <Media/>
           <Member/>
        </div>
    );
};

export default Home;