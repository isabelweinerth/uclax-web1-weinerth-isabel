import styled from "styled-components";

const ReactComponent = ({ title, showDisc = false }) => {
    return (
        <ReactComponentStyled>
            <h3>{title}</h3>
            {showDisc && (
                <DisclaimerStyled>
                    Disclaimer: This was my first time ever learning code.
                </DisclaimerStyled>
            )}
        </ReactComponentStyled>
    );
};

export default ReactComponent;

const ReactComponentStyled = styled.div`
    border: solid 3px red;
    color: white;
    padding: 20px;
    margin: 30px 0px;
`;

const DisclaimerStyled = styled.p`
    color: red;
    margin: 20px 0px;
`;
