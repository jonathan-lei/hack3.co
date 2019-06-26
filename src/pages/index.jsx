import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import FAQ from "../views/FAQ";
import Contact from "../views/Contact";

import MailchimpForm from "../components/MailchimpForm";

import hack3 from "../images/Hack3_Bare.png";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const FAQContent = styled.div`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactContent = styled.div`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const logoStyle = {
  width: "50%"
};

const subtitleStyle = {};

const Index = () => (
  <>
    <Layout />
    <Parallax pages={6}>
      <Hero offset={0}>
        <BigTitle>
          <img src={hack3} style={logoStyle} />
        </BigTitle>
        <Subtitle style={subtitleStyle}>
          Experience Innovation <br />A new hackathon in the Boston area
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Important Info</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="October 2019"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Exact date will be determined
          </ProjectCard>
          <ProjectCard
            title="Boston Area"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Exact location to be determined
          </ProjectCard>
          <ProjectCard
            title=">150 Hackers"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Live headcount will be posted
          </ProjectCard>
          <ProjectCard
            title="$X of Prizes"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Prizes willl be posted
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <FAQ offset={3}>
        <Title>FAQ</Title>
        <FAQContent>
          <dl>
            <dt>What is a Hackathon?</dt>
            <dd>
              A hackathon is a 24-48 hour long event where teams of people come
              together to design and build something involving a novel use of
              technology, usually centered around some theme.
            </dd>
            <dt>When and where is Hack3?</dt>
            <dd>Coming soon!</dd>
            <dt>Who should come to Hack3?</dt>
            <dd>
              High school students with an interest in technology or
              programming.
            </dd>
            <dt>What should I bring?</dt>
            <dd>Your laptop, charger and a sleeping bag.</dd>
            <dt>Is there a place to sleep/eat?</dt>
            <dd>
              There will be a separate room for sleeping, and meals for the
              weekend (including snacks and drinks) will be provided free of
              charge.
            </dd>
            <dt>How much experience do I need?</dt>
            <dd>
              No experience is needed! Anyone with an interest in the field can
              come and participate.
            </dd>
            <dt>How do I form a team?</dt>
            <dd>
              We encourage you to form a team prior to the event itself.
              However, it is possible to find a team at the event or even take
              on the challenge on your own.
            </dd>
            <dt>Are there prizes?</dt>
            <dd>
              Yes! There are prizes for first, second and third place for each
              of the three tracks, but you can only participate in one track.
            </dd>
            <dt>How is the winner determined?</dt>
            <dd>
              You will present your final product to a panel of judges who will
              determine winners based on creativity, how technically challenging
              it was to create, and how much it fits the theme.
            </dd>
          </dl>
        </FAQContent>
      </FAQ>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactContent>
            <p>
              Got questions? Say <a href="mailto:head@hack3.co">hi via email</a>
              , or sign up on our mailing list below to keep up with updates and
              event details.
            </p>

            <MailchimpForm />
          </ContactContent>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{" "}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
