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
  ThemeIcon,
  Accordion,
} from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : "#f0f0f0"
    }`,
  },
}));

export default function Faq() {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | EFG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title="Frequently Asked Questions" />
      <Container size="md" mt={30} className={classes.wrapper}>
        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="1">
            <Accordion.Control>
              How do I book a safety course?
            </Accordion.Control>
            <Accordion.Panel>
              To book a safety course, go to our website's{" "}
              <a href="/booking" target="_blank">
                booking page
              </a>
              and fill out the course booking form. Provide the required
              information such as your name, contact details, preferred course
              date, and any additional details if needed. Submit the form, and
              our team will contact you to confirm your booking.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="2">
            <Accordion.Control>
              What types of safety courses do you offer?
            </Accordion.Control>
            <Accordion.Panel>
              We offer a wide range of safety courses tailored to various
              industries and needs. Our courses cover topics such as first aid,
              CPR, fire safety, workplace safety, hazard identification, and
              more. Visit our course catalog to explore the full list of
              available courses.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="3">
            <Accordion.Control>
              How can I check the schedule and availability of courses?
            </Accordion.Control>
            <Accordion.Panel>
              You can check the schedule and availability of courses on our
              website. Visit{" "}
              <a href="/schedule" target="_blank">
                schedule page
              </a>
              , and you'll find information about upcoming course dates,
              timings, and availability. If you have specific requirements or
              need assistance, feel free to reach out to our team for
              personalized guidance.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="4">
            <Accordion.Control>
              Can I reschedule or cancel my booking?
            </Accordion.Control>
            <Accordion.Panel>
              Yes, you can reschedule or cancel your booking, but please note
              that it is subject to our rescheduling and cancellation policy.
              Contact our support team or refer to our booking terms and
              conditions for detailed information on rescheduling and
              cancellation procedures.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="6">
            <Accordion.Control>
              Do you provide certification upon course completion?
            </Accordion.Control>
            <Accordion.Panel>
              Yes, upon successful completion of a safety course, we provide
              certification that verifies your participation and achievement.
              The type of certification may vary depending on the course and its
              accreditation. Our certificates are recognized and widely accepted
              within the industry.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="7">
            <Accordion.Control>
              Can companies or organizations book safety courses for their
              employees?
            </Accordion.Control>
            <Accordion.Panel>
              Absolutely! We offer corporate booking options for companies and
              organizations looking to provide safety training for their
              employees. Our team can customize the training programs to meet
              specific organizational needs and deliver the courses at your
              preferred location or our training facility.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="8">
            <Accordion.Control>
              Are your instructors qualified and experienced?
            </Accordion.Control>
            <Accordion.Panel>
              Yes, our instructors are highly qualified and experienced in their
              respective fields. They possess the necessary certifications,
              expertise, and practical knowledge to deliver effective safety
              training. Rest assured, you will be learning from professionals
              who are committed to providing quality education and ensuring your
              understanding of safety practices.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="9">
            <Accordion.Control>
              How can I contact your support team for further assistance?
            </Accordion.Control>
            <Accordion.Panel>
              If you have any questions, concerns, or need further assistance,
              you can reach our support team through the contact information
              provided on{" "}
              <a href="/contact" target="_blank">
                our website
              </a>
              . We are available via phone, email, or through the contact form.
              Our team will be happy to assist you with any inquiries or help
              you with your booking process.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="10">
            <Accordion.Control>
              What payment methods are available for booking?
            </Accordion.Control>
            <Accordion.Panel>
              We offer the following payment methods for booking:
              <ul>
                <li>PayNow</li>
                <li>Bank Transfer</li>
                <li>Nets</li>
                <li>Cash</li>
                <li>Cheque</li>
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="11">
            <Accordion.Control>
              Are there any discounts or promotions available for course
              bookings?
            </Accordion.Control>
            <Accordion.Panel>
              We periodically offer discounts, promotions, or special offers on
              our safety courses. Keep an eye on our website's promotions
              section or subscribe to our newsletter to stay updated on any
              upcoming discounts or promotional campaigns.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}