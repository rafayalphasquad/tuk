import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateStripeDto } from './dto/create-stripe.dto';
import { UpdateStripeDto } from './dto/update-stripe.dto';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  // @Post('payment')
  // createPaymentIntent(@Body() body: { amount: number }) {
  //   const { amount } = body;
  //   return this.stripeService.createPaymentIntent(amount);
  // }

  @Post('checkout')
  createCheckout(
    @Body()
    body: {
      userId: number;
      stripePriceId: string;
      productName: string;
      licenseId: string;
      templateId: string;
    },
  ) {
    const { userId, stripePriceId, productName, licenseId, templateId } = body;
    return this.stripeService.createCheckoutSession(
      userId,
      licenseId,
      templateId,
      stripePriceId,
      productName,
    );
  }
  @Post('verify')
  verify(@Body() body: { sessionId: string }) {
    const { sessionId } = body;
    return this.stripeService.verifyPayment(sessionId);
  }

  @Post('session')
  retrieveCheckOutSession(@Body('sessionId') sessionId: string) {
    return this.stripeService.retrieveSession(sessionId);
  }
}
