import moment from "moment";

export default function DateMoment(date) {
  const result = moment(date).format("MMMM Do, H:mm") || null;

  if (result !== "Invalid date") return result;
  return null;
}
