import Dashboard from "@/components/Dashboard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  if (!user || !user.id) {
    redirect("/auth-callback?origin=dashboard");
  }

  const dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }
  return (
    <MaxWidthWrapper>
      <Dashboard />
    </MaxWidthWrapper>
  );
};

export default DashboardPage;
