export const greetingFn = (username: string) => {
  let userGreeting = "";
  const myDate = new Date();
  const hrs = myDate.getHours();

  if (hrs < 12) {
    userGreeting = `Good morning ${username}!`;
  } else if (hrs >= 12 && hrs <= 17) {
    userGreeting = `Good afternoon ${username}!`;
  } else if (hrs >= 17 && hrs <= 24) {
    userGreeting = `Good evening ${username}!`;
  }
  return userGreeting;
};

export const isServer = typeof window === "undefined";
