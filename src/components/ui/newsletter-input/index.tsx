import { FormEvent, useState } from "react";

import { CheckIcon } from "@chakra-ui/icons";

import {
  Grid,
  Button,
  Input,
  Tag,
  TagLabel,
  Box,
  Flex,
  MenuButton,
  Menu,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

interface INewsLetter {
  isSm?: boolean;
}
export const NewsLetterInput = ({ isSm }: INewsLetter) => {
  const [submit, setSubmit] = useState(false);
  const [newsletterInput, setNewsletterInput] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmit(true);

    setTimeout(() => {
      setSubmit(false);
      setNewsletterInput(false);
    }, 2000);
  };

  return (
    <Grid gap={5}>
      <Tag
        as="button"
        colorScheme="purple"
        onClick={() => setNewsletterInput(!newsletterInput)}
        justifySelf="start"
        borderRadius="full"
        gap={2}
      >
        <EmailIcon />
        <TagLabel>Subscribe to our newsletter</TagLabel>
      </Tag>

      {newsletterInput && (
        <Grid gap={3}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Flex align="center" gap={1}>
              <Input placeholder="you@mail.com" />
              <Button type="submit" borderRadius={0} colorScheme="purple">
                <CheckIcon />
              </Button>
            </Flex>
          </form>
          {submit && (
            <Tag gridRow={2} justifySelf="start" colorScheme="green">
              <CheckIcon></CheckIcon>
              <TagLabel paddingLeft={3}>
                You subscribed on our newsletter with success
              </TagLabel>
            </Tag>
          )}
        </Grid>
      )}
    </Grid>
  );
};
