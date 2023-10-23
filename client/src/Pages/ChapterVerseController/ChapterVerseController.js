import { Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function ChapterVerseController(props) {
  const [myVerseContent, setMyVerseContent] = useState(null);
  useEffect(() => {
    setMyVerseContent({
      verseName: [
        "धृतराष्ट्र उवाच |",
        "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |",
        "मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||",
      ],
      pronounciationStack: [
        "dhṛitarāśhtra uvācha",
        "dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ",
        "māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",
      ],
      wordByWord:
        "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay",
      translation:
        "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
      commentary:
        "The two armies had gathered on the battlefield of Kurukshetra, well prepared to fight a war that was inevitable. Still, in this verse, King Dhritarashtra asked Sanjay, what his sons and his brother Pandu’s sons were doing on the battlefield? It was apparent that they would fight, then why did he ask such a question? The blind King Dhritarashtra’s fondness for his own sons had clouded his spiritual wisdom and deviated him from the path of virtue. He had usurped the kingdom of Hastinapur from the rightful heirs; the Pandavas, sons of his brother Pandu. Feeling guilty of the injustice he had done towards his nephews, his conscience worried him about the outcome of this battle. The words dharma kṣhetre, the land of dharma (virtuous conduct) used by Dhritarashtra depict the dilemma he was experiencing.  Kurukshetra is described as kurukṣhetraṁ deva yajanam in the Shatapath Brahman, the Vedic textbook detailing rituals. It means “Kurukshetra is the sacrificial arena of the celestial gods.” Hence, it was regarded as the sacred land that nourished dharma. Dhritarashtra feared that the holy land might influence the minds of his sons. If it aroused the faculty of discrimination, they might turn away from killing their cousins and negotiate a truce. A peaceful settlement meant that the Pandavas would continue being a hindrance for them. He felt great displeasure at these possibilities, instead preferred that this war transpires. He was uncertain of the consequences of the war, yet desired to determine the fate of his sons. Therefore, he asked Sanjay about the activities of the two armies on the battleground.",
    });
  }, []);

  function copyInformation() {
    const myString = `--Verse\n${myVerseContent.verseName.join(
      "\n"
    )}\n--Pronounciation\n${myVerseContent.pronounciationStack.join(
      "\n"
    )}\n--Word By Word\n${myVerseContent.wordByWord}\n--Translation\n${
      myVerseContent.translation
    }\n--Commentary\n${myVerseContent.commentary}`;
    navigator.clipboard.writeText(myString);
  }

  if (myVerseContent !== null) {
    return (
      <Stack direction="column" spacing={2} sx={{ mt: 4 }}>
        <Divider />
        {myVerseContent.verseName.map((elem, index) => {
          return (
            <Typography variant="h4" align="center" key={index}>
              {elem}
            </Typography>
          );
        })}
        <Divider />

        <Typography color="text.secondary" variant="subtitle1" align="center">
          {myVerseContent.pronounciationStack.map((elem, index) => {
            return (
              <Stack direction="column" key={index}>
                {elem}
                <br />
              </Stack>
            );
          })}
        </Typography>

        <Typography color="text.secondary" variant="subtitle1" align="center">
          {myVerseContent.wordByWord}
        </Typography>
        <Divider />
        <Typography variant="h4" align="center">
          Translation
        </Typography>

        <Typography variant="p" align="center">
          {myVerseContent.translation}
        </Typography>

        <Typography variant="h4" align="center">
          Commentary
        </Typography>

        <Typography variant="p" align="center">
          {myVerseContent.commentary}
        </Typography>
        <Divider />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="small"
            startIcon={<ContentCopyIcon />}
            onClick={copyInformation}
          >
            Copy
          </Button>
        </Stack>
      </Stack>
    );
  } else {
    return <Typography variant="h6">Sorry, nothing to display.</Typography>;
  }
}
