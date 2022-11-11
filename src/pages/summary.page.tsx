import { DashboardLayout } from "../layouts/dashboard.layout";

import { summaryData } from "../data/summary.data";

export default function SummaryPage() {
  return (
    <DashboardLayout
      contactCard={summaryData.contactCard}
      accomplishmentsCard={summaryData.accomplishmentsCard}
      metricsCard={summaryData.metricsCard}
    />
  );
}
