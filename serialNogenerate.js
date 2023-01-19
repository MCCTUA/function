const todayDateAndTimeIs = new Date().toLocaleString("th-TH", {
  timeZone: "asia/bangkok",
});
console.log(todayDateAndTimeIs);

const todayIs = new Date();

const datewithoutTime = (date) => {
  const dateIs = date.setHours(0, 0, 0, 0) / 1000;
  console.log(`Date Local is ${new Date(dateIs)}`);

  console.log("In Function date is : ", dateIs );

  const dateLocal = dateIs.toLocaleString("th-TH", {
    timeZone: "asia/bangkok",
  });

  return dateIs;
};

const dateIs = datewithoutTime(todayIs);

// convert unixTimestamp to Date and Time
console.log(new Date(dateIs));
