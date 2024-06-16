import {
  Input,
  FormLabel,
  FormControl,
  Flex,
  Button,
  HStack,
  VStack,
  Link,
  Textarea,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import * as React from "react";
import { SideNav } from "./SideNav";
import { TopBar } from "./TopBar";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const updateEmail = (evt) => {
    if (error.includes("email") && emailRegex.test(evt.target.value)) {
      const invalid = [];
      error.forEach((item) => {
        if (item !== "email") {
          invalid.push(item);
        }
      });
      setError(invalid);
    }
    setEmail(evt.target.value);
  };

  const updateMessage = (evt) => {
    if (error.includes("message") && evt.target.value) {
      const invalid = [];
      error.forEach((item) => {
        if (item !== "message") {
          invalid.push(item);
        }
      });
      setError(invalid);
    }
    setMessage(evt.target.value);
  };
  const updateName = (evt) => {
    if (error.includes("name") && evt.target.value) {
      const invalid = [];
      error.forEach((item) => {
        if (item !== "name") {
          invalid.push(item);
        }
      });
      setError(invalid);
    }
    setName(evt.target.value);
  };

  const submitForm = async () => {
    setLoading(true);
    console.log("made it");
    try {
      const req = new Request("https://www.google.com", { method: "GET" });
      const response = await fetch(req);
      setEmail("");
      setMessage(JSON.stringify(response));
      setName("");
      setErrorMessage("");
    } catch (e) {
      setErrorMessage(
        "Sorry, there was an issue submitting. Please try again."
      );
    }
    setLoading(false);
  };

  const handleSubmit = (evt) => {
    const invalid = [];
    if (!emailRegex.test(email)) {
      invalid.push("email");
    }
    if (!name) {
      invalid.push("name");
    }
    if (!message) {
      invalid.push("message");
    }
    if (invalid.length) {
      setError(invalid);
    } else {
      submitForm();
    }
  };

  if (loading) {
    return <div>yolo</div>;
  }
  if (false) {
    return (
      <VStack bg="#515031" height="100vh" color="#fff">
        <TopBar />
        <HStack w="100%" alignItems="flex-start" padding="10px 50px">
          <SideNav />

          <VStack flex={4}>
            <Text fontSize="3xl" as="h1">
              Contact us
            </Text>
            <Text color="red" fontSize="xl">
              {errorMessage}
            </Text>
            <FormControl
              maxW="1000px"
              isRequired
              isInvalid={error.includes("name")}
            >
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={updateName} />
              <FormErrorMessage>Please enter your name.</FormErrorMessage>
            </FormControl>
            <FormControl
              maxW="1000px"
              isRequired
              isInvalid={error.includes("email")}
            >
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={updateEmail} type="email" />
              <FormErrorMessage>Please enter a valid email.</FormErrorMessage>
            </FormControl>
            <FormControl
              maxW="1000px"
              isRequired
              isInvalid={error.includes("message")}
            >
              <FormLabel>Message</FormLabel>
              <Textarea value={message} onChange={updateMessage} />
              <FormErrorMessage>Please enter a message.</FormErrorMessage>
            </FormControl>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </VStack>
        </HStack>
      </VStack>
    );
  } else {
    return (
      <VStack bg="#515031" height="100vh" color="#fff">
        <TopBar />
        <HStack w="100%" alignItems="flex-start" padding="10px 50px">
          <SideNav />

          <VStack flex={4} alignItems="flex-start">
            <Text fontSize="3xl" as="h1">
              Contact us
            </Text>
            <img src="./images/dadmarketbackgroundless.png" />
            <Text textAlign="start" fontSize="16px">
              All of our knives are made by hand starting from bars of steel and
              blocks of wood, so the gallery serves solely as examples not an
              active inventory.
            </Text>
            <div style={{ textAlign: "start", fontSize:"16px" }}>
              If you would like one for yourself, email me at{" "}
              <a
                style={{ textDecoration: "underline", color: "#ccc" }}
                href="mailto:allen@leblades.com"
              >
                allen@leblades.com
              </a>{" "}
              or reach out to me on{" "}
              <a
                style={{ textDecoration: "underline", color: "#ccc" }}
                href="https://www.facebook.com/leblades/"
              >
                Facebook
              </a>{" "}
              or{" "}
              <a
                style={{ textDecoration: "underline", color: "#ccc" }}
                href="https://www.instagram.com/leblades_by/"
              >
                Instagram
              </a>
              .
            </div>
          </VStack>
        </HStack>
      </VStack>
    );
  }
};

export { Contact };
