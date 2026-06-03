export class SystemController {
  static async status(req, res) {
    return res.status(200).json({
      state: "ok",
      time: performance.now()
    });
  }
}
