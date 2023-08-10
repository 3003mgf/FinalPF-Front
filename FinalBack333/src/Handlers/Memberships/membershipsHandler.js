import {
  postMemberships,
  getMemberships,
  getMembershipById,
  deleteMembership,
  putMembership
} from "../../Controllers/Memberships.controllers.js";

const getMembershipsHandler = async (req, res, next) => {
  try {
    const data = await getMemberships();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getMembershipsByIdHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const membership = await getMembershipById(id);
    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    res.status(200).json(membership);
  } catch (error) {
    next(error);
  }
};

const deleteMembershipsHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const membership = await deleteMembership(id);
    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    await membership.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};


const postMembershipsHandler = async (req, res, next) => {
  const { name, description, duration, avatar, price } = req.body

  try {
    const post = await postMemberships(name, description, duration, avatar, price)

    res.status(200).json(post);

  } catch (error) {
    next(error)
  }
};

const putMembershipsHandler = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, duration, avatar, price } = req.body;
  try {
    const membership = await putMembership(id);
    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    membership.name = name;
    membership.description = description;
    membership.duration = duration;
    membership.avatar = avatar;
    membership.price = price;
    await membership.save();
    res.status(200).json(membership);
  } catch (error) {
    next(error);
  }
};

export {
  putMembershipsHandler,
  postMembershipsHandler,
  deleteMembershipsHandler,
  getMembershipsByIdHandler,
  getMembershipsHandler,
};
