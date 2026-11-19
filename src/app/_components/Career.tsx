import { getCareer } from "@/api/career"
import Section from "@/app/_ui/Section";
import CareerCard from "./Career/CareerCard";

export default function Career() {
  const career = getCareer();

  return (
    <Section
      id="career"
      heading="CAREER HISTORY & PROJECT HIGHLIGHTS"
      wrapperProps={{ gap: "4" }}
      container={false}
    >
      <CareerCard career={career} />
    </Section>
  )
}