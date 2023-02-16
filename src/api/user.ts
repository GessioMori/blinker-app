import { api } from ".";
import {
  CreateAccountDataType,
  LoginDataType,
  UpdateSubscriptionsDataType,
  UserSchema,
} from "../validators/schemas/user";

export const getAuth = async () => {
  const { data } = await api.get("/user/me");
  const parsedData = UserSchema.parse(data);
  return parsedData;
};

export const login = async ({ email, password }: LoginDataType) => {
  const { data } = await api.post("/user/login", { email, password });
  return data;
};

export const logout = async () => {
  const { data } = await api.delete("/user/logout");
  return data;
};

export const createAccount = async ({
  name,
  email,
  password,
}: Omit<CreateAccountDataType, "confirmPassword">) => {
  const { data } = await api.post("/user/create", { name, email, password });
  return data;
};

export const updateSubscriptions = async ({
  blogName,
  action,
}: UpdateSubscriptionsDataType) => {
  const { data } = await api.put("/user/subscription", { blogName, action });
  return data;
};
