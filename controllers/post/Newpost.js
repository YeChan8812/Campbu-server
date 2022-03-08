import axios from 'axios';
import { posts, users } from '../../models';

module.exports = async (req, res) => {
  const {
    category,
    deposit,
    rental_fee,
    unavailable_dates,
    title,
    content,
    address,
    img_urls,
  } = req.body;

  // const decoded = await authorizeToken(req, res);
  // const user = await users.findOne({
  //   where: {
  //     email: decoded.email,
  //   },
  // });
  if (
    category === undefined ||
    deposit === undefined ||
    rental_fee === undefined ||
    unavailable_dates === undefined ||
    title === undefined ||
    content === undefined ||
    address === undefined ||
    img_urls === undefined
  ) {
    res.status(400).json({ message: 'Bad Request' });
  } else {
    const coordinates = await axios
      .get(`https://dapi.kakao.com/v2/local/search/address.json`, {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAOREST_API}`,
        },
        params: {
          query: address,
        },
      })
      .then((res) => {
        return res.data.documents[0];
      });

    await posts.create({
      category,
      deposit,
      rental_fee,
      unavailable_dates,
      title,
      content,
      longitude: coordinates.x,
      latitude: coordinates.y,
      address,
      img_urls,
      users_id: user,
    });
    res.status(200).json({ message: 'Post Successfully Created' });
  }
};
