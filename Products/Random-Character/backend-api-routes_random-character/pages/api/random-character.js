import Chance from "chance";
const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterHandle: chance.twitter(),
    geoHash: chance.geohash(),

  };
  res.status(200).json(character);
}
