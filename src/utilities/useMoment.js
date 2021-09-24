import moment from "moment";

export default function UseMoment(date, formatOnlyDate) {
  if (formatOnlyDate === true) {
    let result = moment(date).format("DD/MM/YYYY");
    if (result !== "Invalid date") return result;
    return null;
  } else {
    let result = moment(date).format("H:mm - DD/MM/YYYY") || null;
    if (result !== "Invalid date") return result;
    return null;
  }
}
