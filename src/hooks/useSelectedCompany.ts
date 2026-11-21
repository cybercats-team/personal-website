'use client';

import { Company } from "@/api/career";
import { useMemo, useState } from "react";

export type CompanyID = Company['id'];

export type UseSelectedCompanyHook = [Company | undefined, (id: CompanyID) => void];

export default function useSelectedCompany(career: Company[]): UseSelectedCompanyHook {
  const [selectedCompanyId, setSelectedCompanyId] = useState<CompanyID>(() => career?.[0]?.id);

  const selectedCompany = useMemo(() =>
    career?.find(({ id }) => id === selectedCompanyId),
    [career, selectedCompanyId]
  );

  return [selectedCompany,  id => setSelectedCompanyId(id)];
}