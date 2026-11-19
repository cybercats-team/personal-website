'use client';

import { Career } from "@/api/career";
import { useMemo, useState } from "react";

export type CompanyID = Career['name'];

export type UseSelectedCompanyHook = {
  readonly companyId?: CompanyID;
  readonly company?: Career;
  readonly setCompanyId: (id: CompanyID) => void;
};

export default function useSelectedCompany(career: Career[]): UseSelectedCompanyHook {
  const [selectedCompanyId, setSelectedCompanyId] = useState<CompanyID>(() => career?.[0].name);

  const selectedCompany = useMemo(() =>
    career?.find(({ name }) => name === selectedCompanyId),
    [career, selectedCompanyId]
  );

  return {
    companyId: selectedCompanyId,
    company: selectedCompany,    
    setCompanyId: id => setSelectedCompanyId(id)
  };
}