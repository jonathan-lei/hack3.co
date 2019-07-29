import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import BlueSection from "./BlueSection";

import Steven from "../images/Steven.jpg";
import Kevin from "../images/Kevin.jpg";
import Ralph from "../images/Ralph.jpg";
import Aneesh from "../images/Aneesh.jpg";
import { Title } from "../elements/Titles";

const StyledMember = styled.div`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-mono pt-6 md:pt-12`};

  width: 250px;
`;

const MemberImage = styled.img`
  object-fit: cover;
  width: 250px;
  height: 250px;
`;

const MemberDescription = styled.div`
  font-size: 0.75em;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: underline;
`;

const TeamMember = ({ name, picture, role, email, linkedin }) => (
  <StyledMember>
    <p>{name}</p>
    <p>
      <MemberImage src={picture} alt={`${name}'s image`} />
    </p>
    <MemberDescription>
      <p>{role}</p>

      <p>
        <ContactLink href={`mailto:${email}`}>Email</ContactLink>
        {linkedin && (
          <>
            {" "}
            · <ContactLink href={linkedin}>LinkedIn</ContactLink>
          </>
        )}
      </p>
    </MemberDescription>
  </StyledMember>
);

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export default ({ offset }) => (
  <BlueSection offset={offset}>
    <Title>Our Team</Title>
    <Container>
      <TeamMember
        name="Steven Li"
        picture={Steven}
        role="Director of Marketing"
        email="stevenli@hack3.co"
        linkedin="https://www.linkedin.com/in/steven-li-08948418b/"
      ></TeamMember>
      <TeamMember
        name="Kevin Liu"
        picture={Kevin}
        role="Director of Logistics"
        email="kevinliu@hack3.co"
        linkedin="https://linkedin.com/in/the-kevin-liu"
      ></TeamMember>
      <TeamMember
        name="Ralph Zhang"
        picture={Ralph}
        role="Director of Hacker Experience"
        email="yikunzhang@hack3.co"
        linkedin="https://www.linkedin.com/in/yikun-zhang-b7a89a18a/"
      ></TeamMember>
      <TeamMember
        name="Aneesh Edara"
        picture={Aneesh}
        role="Director of Finance"
        email="aneeshedara@hack3.co"
        linkedin="https://www.linkedin.com/in/aneesh-edara/"
      ></TeamMember>
    </Container>
  </BlueSection>
);
