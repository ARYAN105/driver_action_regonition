import { Alert, AlertLogo, AlertTitle } from "@/components/ui/alert";

export default function Callout({ logo, callout }) {
  return (
    <Alert className="">
      <AlertLogo>{logo}</AlertLogo>
      <AlertTitle>{callout}</AlertTitle>
    </Alert>
  );
}
