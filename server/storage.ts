import { 
  User, InsertUser, 
  Contact, InsertContact,
  Newsletter, InsertNewsletter
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Newsletter operations
  subscribeToNewsletter(subscription: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriber(email: string): Promise<Newsletter | undefined>;
  getAllNewsletterSubscribers(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private userIdCounter: number;
  private contactIdCounter: number;
  private newsletterIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.userIdCounter = 1;
    this.contactIdCounter = 1;
    this.newsletterIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }

  // Contact form methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactIdCounter++;
    const now = new Date();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: now
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Newsletter methods
  async subscribeToNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = await this.getNewsletterSubscriber(insertNewsletter.email);
    if (existing) {
      return existing;
    }

    const id = this.newsletterIdCounter++;
    const now = new Date();
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      createdAt: now
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscriber(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (sub) => sub.email === email
    );
  }

  async getAllNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
