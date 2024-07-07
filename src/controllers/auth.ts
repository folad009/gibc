import { Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequestException } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";
import { LoginSchema, SignupSchema } from "../schema/users";
import { NotFoundException } from "../exceptions/not-found";

export const signup = async (req: Request, res: Response) => {
  SignupSchema.parse(req.body);

  const {
    first_name,
    last_name,
    email,
    password,
    business_name,
    business_category,
    business_type,
    business_description,
    business_address,
    profile_picture,
    website_url,
    social_media_handle,
    contact_number,
    cac_certificate,
  } = req.body;
  // Check if user already exists
  let user = await prismaClient.user.findFirst({ where: { email } });
  if (user) {
    throw new BadRequestException(
      "User already exists",
      ErrorCode.UserAlreadyExists
    );
  }

  // create new user
  user = await prismaClient.user.create({
    data: {
      first_name,
      last_name,
      email,
      password: hashSync(password, 10),
      business_name,
      business_category,
      business_type,
      business_description,
      business_address,
      profile_picture,
      website_url,
      social_media_handle,
      contact_number,
      cac_certificate,
    },
  });

  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  LoginSchema.parse(req.body);

  const { email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });
  if (!user) {
    throw new NotFoundException("User not found", ErrorCode.UserNotFound);
  }

  if (!compareSync(password, user.password)) {
    throw new NotFoundException(
      "Incorrect password",
      ErrorCode.IncorrectPassword
    );
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET
  );

  res.json({ user, token });
};

// auth user that login
export const me = async (req: Request, res: Response) => {
  res.json(req.user);
};
