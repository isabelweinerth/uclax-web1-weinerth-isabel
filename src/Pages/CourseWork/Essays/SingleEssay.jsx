import styled from "styled-components";
import PropTypes from "prop-types";

const SingleEssay = ({ question, children }) => {
    return (
        <SingleEssayStyled>
            <h3>{question}</h3>
            <div className="content">content</div>
        </SingleEssayStyled>
    );
};

export default SingleEssay;

//prop types
SingleEssay.propTypes = {
    question: PropTypes.string.isRequired,
    children: PropTypes.any,
};

const SingleEssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 3px #034444;

    h3 {
        background-color: #034444;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }

    .content {
        background-color: white;
        padding: 20px;
    }
`;
