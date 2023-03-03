import moment from "moment";
export const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const formatLocation = (location) => {
  let formattedLocation = [];
  if (location?.city) formattedLocation.push(location.city);
  if (location?.state) formattedLocation.push(location.state);
  if (location?.country) formattedLocation.push(location.country);
  return formattedLocation.join(", ");
};

export const formatDateLong = (date) => {
  const formattedDate = moment(date).format("MMMM YYYY");
  return formattedDate;
};
export const formatDateShort = (date) => {
  const formattedDate = moment(date).format("MMM YYYY");
  return formattedDate;
};

export const formatName = (name) => {
  let formattedName = [];
  if (name.firstname) formattedName.push(name.firstname);
  if (name.middlename) formattedName.push(name.middlename);
  if (name.lastname) formattedName.push(name.lastname);
  return formattedName.join(" ");
};

export const seggregateProfiles = (profiles = []) => {
  let res = [[], [], [], [], []];
  for (let i = 0; i < profiles.length; i++) {
    let profile = profiles[i];
    let yoe = profiles[i].yearsOfExperience;
    if (0 <= yoe && yoe <= 2) {
      res[0].push(profile);
    } else if (3 <= yoe && yoe <= 5) {
      res[1].push(profile);
    } else if (6 <= yoe && yoe <= 7) {
      res[2].push(profile);
    } else if (8 <= yoe && yoe <= 10) {
      res[3].push(profile);
    } else {
      res[4].push(profile);
    }
  }
  return res;
};

export function validatePhoneNumber(number) {
  const regex = /^[0-9]{10}$/;
  return regex.test(number);
}

export function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
