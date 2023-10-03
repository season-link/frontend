import { BOLD } from "common/constants/tamagui";
import { H1, SizableText, Stack, Text } from "tamagui";

// tamagui, big title, small title, text
export function HelloWorld() {
  return (
    <Stack>
      <H1 fontWeight={"$16"}>Hello World</H1>
    </Stack>
  );
}
