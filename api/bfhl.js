export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body.data || [];

      let en = [];
      let on = [];
      let chars = [];
      let alphabets = [];
      let sum = 0;
      let concat_str = "";

      data.forEach(item => {
        if (/^\d+$/.test(item)) {
          let num = parseInt(item, 10);
          if (num % 2 === 0) en.push(item);
          else on.push(item);
          sum += num;
        } else if (/^[a-zA-Z]+$/.test(item)) {
          alphabets.push(item.toUpperCase());
          concat_str += item;
        } else {
          chars.push(item);
        }
      });

      let reversed = concat_str.split("").reverse();
      let altCaps = reversed.map((ch, idx) =>
        idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
      ).join("");

      return res.status(200).json({
        is_success: true,
        user_id: "jatin_kumar_1",
        roll_number: "22BCE2716",
        email: "jatin.kumar2022@vitstudent.ac.in",
        on,
        en,
        alphabets,
        chars,
        sum: sum.toString(),
        concat_str: altCaps
      });
    } catch (error) {
      return res.status(500).json({ is_success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ message: "valid" });
  }
}
