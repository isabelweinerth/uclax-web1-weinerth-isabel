import styled from "styled-components";

// Scripts
// import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponent";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>
            <ReactComponent title="Thank you," showDisc={true} />
            <ReactComponent title="For a great quarter," showDisc={false} />
            <ReactComponent title="I appreciate it!" />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div`
    color: white;
`;
