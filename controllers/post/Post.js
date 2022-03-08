import axios from 'axios';
import { posts, users, users_reviews } from '../../models';

module.exports = {
  get: async (req, res) => {
    const id = Number(req.params.postId);
    const post = await posts.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({ posts: post, user });
  },
  patch: async (req, res) => {
    const id = Number(req.params.postId);

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

    if (category) {
      await posts.update(
        { category },
        {
          where: { id: id },
        },
      );
    }
    if (deposit) {
      await posts.update(
        { deposit },
        {
          where: { id: id },
        },
      );
    }
    if (rental_fee) {
      await posts.update(
        { rental_fee },
        {
          where: { id: id },
        },
      );
    }
    if (unavailable_dates) {
      await posts.update(
        { unavailable_dates },
        {
          where: { id: id },
        },
      );
    }
    if (title) {
      await posts.update(
        { title },
        {
          where: { id: id },
        },
      );
    }
    if (content) {
      await posts.update(
        { content },
        {
          where: { id: id },
        },
      );
    }
    if (img_urls) {
      await posts.update(
        { img_urls },
        {
          where: { id: id },
        },
      );
    }
    if (address) {
      const coordinates = await axios
        .get('https://dapi.kakao.com/v2/local/search/address.json', {
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
      await posts.update({
        address,
        longitude: coordinates.x,
        latitude: coordinates.y,
      });
    }
  },
};
