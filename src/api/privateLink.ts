import { api } from ".";
import {
  PrivateLinkBaseType,
  PrivateLinkInputType,
  PrivateLinkResponseSchema,
  PrivateLinkSchema,
  PrivateLinkUpdateType,
} from "../validators/schemas/privateLink";

export const getPrivateLinks = async () => {
  const { data: privateLinks } = await api.get("/pl/user");
  const parsedPrivateLinks = PrivateLinkResponseSchema.parse(privateLinks);
  return parsedPrivateLinks;
};

export const createPrivateLink = async ({
  title,
  url,
}: PrivateLinkBaseType) => {
  const { data: privateLink } = await api.post("/pl", { title, url });
  const parsedPrivateLink = PrivateLinkSchema.parse(privateLink);
  return parsedPrivateLink;
};

export const updatePrivateLink = async ({
  title,
  url,
  id,
}: PrivateLinkUpdateType) => {
  const { data: privateLink } = await api.put(`/pl/${id}`, { title, url });
  const parsedPrivateLink = PrivateLinkSchema.parse(privateLink);
  return parsedPrivateLink;
};

export const deletePrivateLink = async (id: number) => {
  await api.delete(`/pl/${id}`);
  return;
};
