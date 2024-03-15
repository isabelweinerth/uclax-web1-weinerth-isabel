import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import Tabbed from "./Tabbed/Tabbed";
import Slideshow from "./Slideshow/Slideshow";

const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }

    background-color: black;
`;
