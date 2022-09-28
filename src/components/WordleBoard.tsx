import { Stack } from "@mui/material";
import Alerts from "./Alerts";
import WordleLine from "./WordleLine";

export default function WordleBoard() {
  return (
    <div>
      <Alerts />
      <Stack spacing={1}>
        <WordleLine line={0} />
        <WordleLine line={1} />
        <WordleLine line={2} />
        <WordleLine line={3} />
        <WordleLine line={4} />
        <WordleLine line={5} />
      </Stack>
    </div>
  );
}
