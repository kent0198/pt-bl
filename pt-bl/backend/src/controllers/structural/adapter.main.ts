import { Request, Response, NextFunction } from "express";
import { catchAsyncErrors } from "@middleware/catchAsyncErrors";
import { IReqBody } from "@type/types";
import execCode from "@util/execCode";

export const adapterMain = catchAsyncErrors(
  async ( 
    req: Request<{}, {}, IReqBody>,
    res: Response,
    next: NextFunction
  ) => {
    const body = req.body;
    let code = `
      const { MediaPlayer, MP3Player, MP3PlayerAdapter, AudioPlayer } = require("@pattern/structural/adapter.pattern");
    `
    code += body.code;

    res.json({
      result: execCode(code)
    });
});
