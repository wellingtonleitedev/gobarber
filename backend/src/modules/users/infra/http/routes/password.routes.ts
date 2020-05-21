import { Router } from 'express';
import ForgotPasswordController from '../controllers/forgotPasswordController';
import ResetPasswordController from '../controllers/resetPasswordController';

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

const passwordRouter = Router();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
