import * as cloudscape from "@cloudscape-design/components";

import { DashboardLayout } from "../layouts/dashboard.layout";
import { summaryData } from "../data/summary.data";

export default function SummaryPage() {
  return (
    <cloudscape.ContentLayout
      header={<cloudscape.Header variant="h1">Summary</cloudscape.Header>}
    >
      <DashboardLayout
        contactCard={summaryData.contactCard}
        accomplishmentsCard={summaryData.accomplishmentsCard}
        metricsCard={summaryData.metricsCard}
      />
    </cloudscape.ContentLayout>
  );
}
