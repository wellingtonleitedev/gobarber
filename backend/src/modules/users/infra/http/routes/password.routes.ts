import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';

const forgotPasswordController = new ForgotPasswordController();

const passwordRouter = Router();

passwordRouter.post('forgot', forgotPasswordController.create);
