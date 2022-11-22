import Head from "next/head";
import { Banner } from "../components/Banner/Banner";
import {
  Container,
  Grid,
  Title,
  createStyles,
  Text,
  List,
  Group,
  Divider,
  ThemeIcon
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons";
import { UserCard } from "../components/UserCard/UserCard";

const data = [
  {
    avatar: "rosli.jpg",
    name: "Mr. Rosli Bin Pitchay",
    email: "jfingerlicker@me.io",
    job: "Art director",
  },
  {
    avatar: "naseer.jpg",
    name: "Mr. Nasir",
    email: "jfingerlicker@me.io",
    job: "Art director",
  },
  {
    avatar: "govind.jpg",
    name: "Mr. Govindaraju",
    email: "jfingerlicker@me.io",
    job: "Art director",
  },
];

const styles = createStyles((theme) => ({
  paragraph: {
    margin: "20px 0",
    lineHeight: 1.7,
  },

  title: {
    margin: "40px 0",
  },

  list: {
    margin: "20px 0",
    color: "inherit"
  },

  group: {
    '& > div': {
      [theme.fn.smallerThan("sm")]: {
        maxWidth: "100%",
      },
    }
  }
}));

const directors = data.map(director => {
  return <UserCard key={director.avatar} {...director} />
});

export default function About() {
  const { classes } = styles();
  return (
    <>
      <Head>
        <title>About Us | EFG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title="About us" />
      <Container size="md">
        <Text className={classes.paragraph}>
          We have in total amongst ourselves been in the business for the last
          35 plus years, having held portfolios of supervisory and managerial
          positions of several companies in charge of their workforce safety
          well-being and training requirements.
        </Text>
        <Text className={classes.paragraph}>
          The company was incorporated sometime in 2013. It is setup for the
          sole purpose to provide accredited safety training to industries under
          the Ministry Of Manpower, Occupational Safety Department certification
          scheme and SSG WSG Agency WSQ frameworks.
        </Text>
        <Divider my="sm" variant="dashed" />
        <Title order={3}>Our Mission</Title>
        <List className={classes.list}  icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={24} />
        </ThemeIcon>
      }>
          <List.Item>
            To provide relevant safety training to workers & management in
            enhancing the safety of their workplace and to engage themselves in
            safety behavior whilst at work.
          </List.Item>
          <List.Item>
            To provide safety training of the highest quality;
          </List.Item>
          <List.Item>
            To provide conducive environment for the training
          </List.Item>
        </List>
        <Divider my="sm" variant="dashed" />
        <Title order={3}>Our Vision</Title>
        <Text className={classes.paragraph}>
          To support our clients’ business and personal development goals,
          through our training programmes that offer the pathway to increased
          individual and organizational performances.
        </Text>
        <Divider my="sm" variant="dashed" />
        <Title order={3} className={classes.title}>
          Our Directors
        </Title>
        <Group position="center" className={classes.group} grow>
          {directors}
        </Group>
        <Text className={classes.paragraph}>
          The organization’s experience in training rests on the experience of
          the persons behind the company and the pool of qualified
          trainers/facilitators from the industry. Although the company is newly
          incorporated, the main partner, Mr. Rosli Bin Pitchay, Mr Md Nasser
          Bin Hamdan and Mr. S. Govindaraju is involved in running the company.
          They have vast experience in engineering, construction and
          manufacturing industries. They have in total amongst themseves been in
          the business for the last 30 plus years, having held a portfolios of
          supervisory and managerial positions of several companies in charge
          their workforce safety well-being and training requirements.
        </Text>
        <Text className={classes.paragraph}>
          With the setting up of the company, we have with us qualified,
          approved accredited trainers/facilitators with relevant industries
          experience who will be running the daily activities in the training
          centre.
        </Text>
        <Text className={classes.paragraph}>
          All our trainers/facilitators in the centre are fully competent and
          qualified for the delivery of courses. They are existing approved
          accredited trainers/facilitators by MOM, LSP and SSG to conduct the
          safety courses. They are well versed in delivering and developing
          safety-training courses for industries.
        </Text>
        <Text className={classes.paragraph}>
          They have been trained and worked as safety supervisors, safety
          coordinators, WSHO, ECO, lifting supervisors and other related safety
          courses and have extensive practical industrial experience. It is our
          centre commitment to develop and deliver programs to further their
          skills and knowledge in their field to assist our clients in their
          training needs.
        </Text>
      </Container>
    </>
  );
}
