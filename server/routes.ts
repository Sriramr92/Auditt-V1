import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertNewsletterSchema 
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const savedContact = await storage.createContact(contactData);
      return res.status(201).json({ 
        success: true, 
        message: 'Contact form submitted successfully',
        data: savedContact 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while submitting the form' 
      });
    }
  });

  app.post('/api/newsletter', async (req, res) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getNewsletterSubscriber(newsletterData.email);
      if (existingSubscriber) {
        return res.status(200).json({ 
          success: true, 
          message: 'You are already subscribed to our newsletter',
          data: existingSubscriber
        });
      }
      
      const savedSubscription = await storage.subscribeToNewsletter(newsletterData);
      return res.status(201).json({ 
        success: true, 
        message: 'Subscribed to newsletter successfully',
        data: savedSubscription 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while subscribing to the newsletter' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
