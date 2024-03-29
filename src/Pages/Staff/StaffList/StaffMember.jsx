import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearPlayed, accolades } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
            <h3> {name}</h3>

            <div className="bottom">
                <p>
                    <b> Year Played:</b> {yearPlayed}
                </p>
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #871414;
    color: #eeafaf;

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 20px;
        background-color: #871414;
    }

    h3 {
        color: white;
        background-color: #490b0b;
        padding: 5px 10px;
        margin: 0px;
    }
`;
