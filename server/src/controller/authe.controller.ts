import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../prisma/generated/prisma/index.js";

const prisma = new PrismaClient();
