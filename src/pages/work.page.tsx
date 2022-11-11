import * as router from "react-router-dom";
import * as cloudscape from "@cloudscape-design/components";

import { DashboardLayout } from "../layouts/dashboard.layout";
import { workData } from "../data/work.data";

export default function WorkPage() {
  const params = router.useParams<{ company: string }>();
  const navigate = router.useNavigate();

  if (!params.company) {
    navigate("/");
  }

  const company = params.company as keyof typeof workData;

  return (
    <cloudscape.ContentLayout
      header={<cloudscape.Header variant="h1">Work</cloudscape.Header>}
    >
      <DashboardLayout
        key={workData[company].contactCard.name}
        contactCard={workData[company].contactCard}
        accomplishmentsCard={workData[company].accomplishmentsCard}
        metricsCard={workData[company].metricsCard}
      />
    </cloudscape.ContentLayout>
  );
}
