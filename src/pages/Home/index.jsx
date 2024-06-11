import Hero from "./Hero";
import Client from "./Client";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
import Section6 from "./sections/section6";
const Home = () => {
    return(
        <>
            <Hero/>
            <Client/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            {/*<h1>my name is Janet</h1>*/}
        </>
    )
}

export default Home;