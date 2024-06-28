import * as pics from "../constants/pictures";

const array = [...Object.values(pics)];
export function getRandomPic() {
  const ramdom = Math.floor(Math.random() * 14);

  return array[ramdom];
}
