
import { NextResponse } from "next/server";

import { currentProfile } from "../../../lib/current-profile";
import axios from "axios";

export async function POST(req) {
  try {
    const { matricule,niveau,adresse, mobile } = await req.json();
    const user = await currentProfile();
    const api_url = process.env.API_URL

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const values = {email:user.emailAddresses[0].emailAddress,nom:user.firstName,prenom:user.lastName,matricule:matricule,niveau:niveau,adresse:adresse,image:user.imageUrl,mobile:mobile}
    console.log(values)
    const res = await axios.post(api_url+'signup',values)

    return NextResponse.json(res.data);
  } catch (error) {
    console.log("[SERVERS_POST]");
    return new NextResponse("Internal Error", { status: 500 });
  }
}