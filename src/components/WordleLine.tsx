import { Stack } from "@mui/material";
import WordleLetter from "./WordleLetter";

interface WordleLineProps {
  line: number;
}

export default function WordleLine({ line }: WordleLineProps) {
  return (
    <Stack direction="row" spacing={1}>
      <WordleLetter line={line} index={0} />
      <WordleLetter line={line} index={1} />
      <WordleLetter line={line} index={2} />
      <WordleLetter line={line} index={3} />
      <WordleLetter line={line} index={4} />
    </Stack>
  );
}
