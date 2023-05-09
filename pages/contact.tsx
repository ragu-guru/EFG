import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Container,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import { ContactIconsList } from "./../components/ContactIcons/ContactIcons";
import bg from "./../public/images/blue-bg.svg";

const handleSubmit = async (e) => {
  e.preventDefault();
  // Get data from the form.
  const data = {
    contactName: e.target.contactName.value,
    contactEmail: e.target.contactEmail.value,
    contactSubject: e.target.contactSubject.value,
    contactMessage: e.target.contactMessage.value,
  };
  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      // console.log("Response received", res);
      if (res.status === 200) {
        // console.log("Response succeeded!");
        console.log("Thank you for contacting us!");
      } else {
        // console.log("Email/Password is invalid.");
        console.log("Email/Password is invalid.");
      }
    })
    .catch((e) => console.log(e));
};

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: "0.25rem",
      border: `0.0625rem solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: "-0.75rem",
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: `0.0625rem solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 17.5rem`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `30px`,
      fontWeight: `700`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export default function Contact() {
  const { classes } = useStyles();
  return (
    <Container size="lg" mt={120}>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} color="#fff">
              Contact information
            </Text>

            <ContactIconsList variant="white" />
          </div>

          <form className={classes.form} onSubmit={handleSubmit}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                  name="contactName"
                  label="Your name"
                  placeholder="Your name"
                />
                <TextInput
                  name="contactEmail"
                  label="Your email"
                  placeholder="hello@yourcomapay.email"
                  required
                />
              </SimpleGrid>

              <TextInput
                name="contactSubject"
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
              />

              <Textarea
                mt="md"
                name="contactMessage"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
