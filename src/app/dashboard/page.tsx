import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  if (!user || !user.id) {
    redirect("/auth-callback?origin=dashboard");
  }
  return (
    <MaxWidthWrapper>
      <div>{user.email}</div>
    </MaxWidthWrapper>
  );
};

export default DashboardPage;
