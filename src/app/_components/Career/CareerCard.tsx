'use client';

import {
  Separator
} from "@radix-ui/themes";

import { type Career } from "@/api/career";
import useSelectedCompany from "@/hooks/useSelectedCompany";

import CompanyHeader from "@/app/_components/Career/CompanyHeader";
import CompanyList from "@/app/_components/Career/CompanyList";
import CompanyPicker from "@/app/_components/Career/CompanyPicker";
import ProjectCarousel from "@/app/_components/Career/ProjectCarousel";

export type CareerCardProps = {
  career: Career[];
}

export default function CareerCard({ career }: CareerCardProps) {
  const { company, companyId, setCompanyId } = useSelectedCompany(career);

  return (
    <>  
      <CompanyHeader company={company}>
        <CompanyPicker companyId={companyId} setCompanyId={setCompanyId}>
          <CompanyList career={career} />
        </CompanyPicker>
      </CompanyHeader>
      <Separator size="4" />
      <ProjectCarousel company={company} key={company?.name} />
    </>
  );
}