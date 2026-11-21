import { getCareer } from "@/api/career"
import Section from "@/app/_ui/Section";
import CareerCard from "./Career/CareerCard";

export default async function Career() {
  'use cache';
  const career = await getCareer();

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