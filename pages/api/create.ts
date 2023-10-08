import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, surname, classnum } = req.body; // Fix variable names here

  try {
    await prisma.members.create({
      data: {
        name, // Use the corrected variable name
        surname, // Use the corrected variable name
        classnum // Use the corrected variable name
      },
    });
    res.status(200).json({ message: 'Note Created' });
  } catch (error) {
    console.log("Failure");
  }
}
