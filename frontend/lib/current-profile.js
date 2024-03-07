import { auth, currentUser } from "@clerk/nextjs";

export const currentProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }
  
  return user
}