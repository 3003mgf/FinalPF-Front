import Memberships from "../Models/Memberships.js";

export const postMemberships = async (
  name,
  description,
  duration,
  avatar,
  price
) => {
  const membership = await Memberships.create({
    name,
    description,
    duration,
    avatar,
    price,
  });

  return { data: membership };
};

export const getMemberships = async () => {
  const memberships = await Memberships.findAll();

  return { data: memberships };
};

export const getMembershipById = async (id) => {
  const membership = await Memberships.findByPk(id);
  return { data: membership };
};

export const deleteMembership = async (id) => {
  const membership = await Memberships.findByPk(id);
  if (membership) {
    await membership.destroy();
    return { data: true };
  } else {
    return { data: false };
  }
};

export const putMembership = async (
  id,
  name,
  description,
  duration,
  avatar,
  price
) => {
  const membership = await Memberships.findByPk(id);
  if (membership) {
    membership.name = name;
    membership.description = description;
    membership.duration = duration;
    membership.avatar = avatar;
    membership.price = price;
    await membership.save();
    return { data: membership };
  } else {
    return { data: null };
  }
};
