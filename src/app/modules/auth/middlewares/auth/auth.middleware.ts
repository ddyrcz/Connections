import { Middleware, NestMiddleware, UnauthorizedException } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express'
import { JwtValidator } from "../../services/jwt-validator/jwt-validator.service";
import { HttpException } from "@nestjs/core";

@Middleware()
export class AuthMiddleware implements NestMiddleware {

  private excludedPaths: string[]

  private authenticationPaths: string[] = [
    '/auth/login',
    '/auth/register'
  ]

  constructor(private tokenValidator: JwtValidator) {
    this.excludedPaths = [
      ...this.authenticationPaths
    ]
  }

  resolve() {
    return async (request: Request, response: Response, next: NextFunction) => {
      if (this.isExcluded(request.path)) {
        next();
      } else {
        await this.validateToken(request, response, next);
      }
    }
  }

  private isExcluded(path: string): boolean {
    return this.excludedPaths.indexOf(path) !== -1
  }

  private async validateToken(request: Request, response: Response, next: NextFunction): Promise<void> {
    let token: string | undefined = this.pullOutToken(request);

    if (!token) {
      throw new UnauthorizedException("Błąd uwierzytelnienia")
    }

    try {

      const user = await this.tokenValidator.validate(token);
      (request as any).user = user;
    } catch{
      throw new UnauthorizedException("Błąd uwierzytelnienia")
    }
    next();
  }

  private pullOutToken(request: Request): string | undefined {
    return request.header('x-access-token') || request.query.token
  }
}
