import dbConnect from "../../db/connect";
import Event from "../../model/Event";
import { StatusCodes } from "http-status-codes";

const handler = async (req, res) => {
  const { method } = req;
  const { eventDate, contactPerson, contactEmail, contactNumber } = req.body;

  try {
    await dbConnect();
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errMsg: "Error connecting to DB. Please Report to Admin" });
    return;
  }

  if (method === "POST") {
    if (!eventDate || !contactPerson || !contactEmail || !contactNumber) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errMsg: "Please provide all necessary fields" });
      return;
    }

    try {
      const newEvent = await Event.create(req.body);
      res
        .status(StatusCodes.CREATED)
        .json({ msg: "event successfully submitted", newEvent });
      return;
    } catch (error) {
      console.log(error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ errMsg: error.message });
      //   throw new Error("error caught");
      //   return next(error);
    }
  }
};

export default handler;
