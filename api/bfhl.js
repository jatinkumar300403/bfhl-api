export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body.data || [];

      let even_numbers = [];
      let odd_numbers = [];
      let alphabets = [];
      let special_characters = [];
      let sum = 0;
      let concat_string = "";

      data.forEach(item => {
        if (/^\d+$/.test(item)) {
          let num = parseInt(item, 10);
          if (num % 2 === 0) even_numbers.push(item);
          else odd_numbers.push(item);
          sum += num;
        } else if (/^[a-zA-Z]+$/.test(item)) {
          alphabets.push(item.toUpperCase());
          concat_string += item;
        } else {
          special_characters.push(item);
        }
      });

      let reversed = concat_string.split("").reverse();
      let altCaps = reversed.map((ch, idx) =>
        idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
      ).join("");

      return res.status(200).json({
        is_success: true,
        user_id: "jatin_kumar_01012002",
        email: "jatin.kumar2022@vitstudent.ac.in",
        roll_number: "22BCE2716",
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum: sum.toString(),
        concat_string: altCaps
      });
    } catch (error) {
      return res.status(500).json({ is_success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }
}
