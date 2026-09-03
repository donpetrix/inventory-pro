import { getCurrentUser } from "@/lib/auth";
import SettingsClient from "./template-client";

export default async function SettingsPage() {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const userData = {
    id: user.id,
    displayName: user.displayName,
    email: user.primaryEmail,
    profileImageUrl: user.profileImageUrl,
  };

  return <SettingsClient user={userData} />;
}
